import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authService } from '~/api/auth';

// ----------------------------------------------------------------------

const initialState = {
  error: false,
  loginLoading: false,
  logoutLoading: false,
  accessToken: null,
  username: null
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
      if (keyLoading) {
        state[keyLoading] = false;
      }
      state.error = error;
    },

    // LOGIN SUCCESS
    loginSuccess(state, action) {
      const { access_token, exp, username } = action.payload.data;
      state.accessToken = access_token;
      state.username = username;
      storage.setItem('accessToken', access_token);
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

export function centralLogout() {
  return async dispatch => {
    dispatch(
      slice.actions.toggleLoading({
        keyLoading: 'logoutLoading',
        status: true
      })
    );
    try {
      const response = await authService._centralLogout();
      if (response) {
        dispatch(slice.actions.logout());
        return;
      }
      throw response;
    } catch (error) {
      dispatch(slice.actions.hasError({ keyLoading: 'logoutLoading', error }));
    }
  };
}

export function validateToken({ token }) {
  return async dispatch => {
    dispatch(
      slice.actions.toggleLoading({
        keyLoading: 'loginLoading',
        status: true
      })
    );
    try {
      const response = await authService._validateToken({ token });
      console.log('validateToken', response);
      if (response) {
        // dispatch(
        //   slice.actions.loginSuccess({
        //     data: response.data.data
        //   })
        // );

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

export function getToken() {
  return async dispatch => {
    dispatch(
      slice.actions.toggleLoading({
        keyLoading: 'loginLoading',
        status: true
      })
    );
    try {
      const response = await authService._getToken();
      if (response && response.access_token !== 'N/A') {
        const { access_token } = response;
        const responseTokenValidation = await authService._validateToken({
          token: access_token
        });
        if (responseTokenValidation) {
          const { code, message } = responseTokenValidation;
          if (code === 200) {
            dispatch(
              slice.actions.loginSuccess({
                data: response
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

          throw message;
        }
        dispatch(
          slice.actions.toggleLoading({
            keyLoading: 'loginLoading',
            status: false
          })
        );
      } else {
        if (response && response.access_token === 'N/A') {
          dispatch(
            slice.actions.toggleLoading({
              keyLoading: 'loginLoading',
              status: false
            })
          );
          dispatch(slice.actions.logout());
          return;
        }
        throw response;
      }
    } catch (error) {
      dispatch(slice.actions.hasError({ keyLoading: 'loginLoading', error }));
    }
  };
}
