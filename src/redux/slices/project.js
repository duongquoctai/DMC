import { sum, map, filter, uniqBy, isEmpty } from 'lodash';
import axios from '../../utils/httpServices';
import { createSlice } from '@reduxjs/toolkit';
import { projectService } from '~/api/projects';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  projects: [],
  sortBy: null,
  message: ''
};

const slice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET PROJECTS
    getProjectsSuccess(state, action) {
      state.isLoading = false;
      state.projects = action.payload;
    },

    createProjectSuccess(state, action) {
      state.isLoading = false;
      state.message = 'Create project success!';
    },

    deleteProjectSuccess(state, action) {
      state.isLoading = false;
      state.message = 'Delete project success!';
    },

    //  SORT & FILTER PROJECTS
    sortByProjects(state, action) {
      state.sortBy = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const {
  startLoading,
  hasError,
  getProjectsSuccess,
  sortByProjects
} = slice.actions;

// ----------------------------------------------------------------------

export function getProjects() {
  return async dispatch => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await projectService._getList();
      if (response.status === 200 && !isEmpty(response.data)) {
        dispatch(slice.actions.getProjectsSuccess(response.data.value));
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function createProject(data) {
  return async dispatch => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await projectService._createProject(data);
      if (response.status === 200) {
        dispatch(slice.actions.createProjectSuccess());
        dispatch(getProjects());
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function deleteProject(data) {
  return async dispatch => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await projectService._deleteProject(data);
      if (response.status === 200) {
        dispatch(slice.actions.deleteProjectSuccess());
        dispatch(getProjects());
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
