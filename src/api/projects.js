import axios from '../utils/httpServices';

import { GETLIST_PROJECT } from './endpoint';

/**
 * LOGIN
 */
export const projectService = {
  _getList: () => {
    const endpoint = GETLIST_PROJECT;
    return axios.get(endpoint);
  },
  _createProject: data => {
    const endpoint = `${GETLIST_PROJECT}/${data}`;
    return axios.post(endpoint, null);
  }
};
