import axios from '../utils/httpServices';

import { LOGIN_ENDPOINT } from './endpoint';

/**
 * LOGIN
 */
export const authService = {
  _login: data => {
    const endpoint = LOGIN_ENDPOINT;
    return axios.post(endpoint, data);
  }
};
