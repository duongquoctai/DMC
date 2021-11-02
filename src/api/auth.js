import axios from '../utils/httpServices';

import {
  LOGIN_ENDPOINT,
  LOGOUT_ENDPOINT,
  GET_TOKEN_ENDPOINT,
  CENTRAL_LOGOUT_ENDPOINT,
  VALIDATE_TOKEN_ENDPOINT
} from './endpoint';

/**
 * LOGIN
 */
export const authService = {
  _login: data => {
    const endpoint = LOGIN_ENDPOINT;
    return axios.post(endpoint, data);
  },
  _logout: () => {
    const endpoint = LOGOUT_ENDPOINT;
    return axios.get(endpoint);
  },
  _centralLogout: () => {
    const endpoint = CENTRAL_LOGOUT_ENDPOINT;
    return fetch(endpoint).then(response => response.json());
  },
  _getToken: () => {
    const endpoint = GET_TOKEN_ENDPOINT;
    return axios.get(endpoint);
  },
  _validateToken: ({ token }) => {
    const endpoint = VALIDATE_TOKEN_ENDPOINT;
    return axios.get(endpoint, {
      params: {
        acToken: token
      }
    });
  }
};
