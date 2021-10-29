import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authService } from '~/api/auth';

// ----------------------------------------------------------------------

const initialState = {
  error: false,
  loginLoading: false,
  accessToken: null
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // START LOADING
    toggleLoading(state, action) {
      const { status, keyLoading } = action.payload;
      state[keyLoading] = status ? status : !state[keyLoading];
    },

    // HAS ERROR
    hasError(state, action) {
      const { error, keyLoading } = action.payload;
      state[keyLoading] = false;
      state.error = error;
    },

    // LOGIN SUCCESS
    loginSuccess(state, action) {
      state.accessToken = action.payload.data;
      storage.setItem('accessToken', action.payload.data);
    },

    // LOGIN SUCCESS
    logout(state, action) {
      state.accessToken = null;
      storage.removeItem('redux-auth');
      storage.removeItem('accessToken');
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { logout } = slice.actions;

// ----------------------------------------------------------------------

export function login(data) {
  return async dispatch => {
    dispatch(
      slice.actions.toggleLoading({
        keyLoading: 'loginLoading',
        status: true
      })
    );
    try {
      const response = await authService._login(data);
      if (response.data.success) {
        dispatch(
          slice.actions.loginSuccess({
            data: response.data.data
          })
        );

        dispatch(
          slice.actions.toggleLoading({
            keyLoading: 'loginLoading',
            status: false
          })
        );
        return;
      }
      throw response;
    } catch (error) {
      dispatch(slice.actions.hasError({ keyLoading: 'loginLoading', error }));
    }
  };
}
