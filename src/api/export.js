import axios from '~/utils/httpServices';
import queryString from 'query-string';
import { apiConfig } from '~/config';

import {
  EXPORT_SCHEMA_ENDPOINT,
  EXPORT_SAMPLE_ENDPOINT,
  EXPORT_COUNT_ENDPOINT,
  EXPORT_DATA_ENDPOINT,
  EXPORT_SUMMARY_ENDPOINT
} from './endpoint';

export const exportService = {
  /**
   * SCHEMA
   */
  _fetchSchemas: (params = {}) => {
    const endpoint = EXPORT_SCHEMA_ENDPOINT;
    return axios.get(endpoint, { params });
  },
  /**
   * EXPLORE
   */
  _fetchSample: params => {
    const endpoint = EXPORT_SAMPLE_ENDPOINT;
    return axios.get(endpoint, { params });
  },

  _fetchCount: params => {
    const endpoint = EXPORT_COUNT_ENDPOINT;
    return axios.get(endpoint, { params });
  },

  _fetchSummary: params => {
    const endpoint = EXPORT_SUMMARY_ENDPOINT;
    return axios.get(endpoint, { params });
  },

  _exportData: params => {
    const endpoint = EXPORT_DATA_ENDPOINT;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          url: `${apiConfig.apiUrl}${endpoint}?${queryString.stringify(params)}`
        });
      }, 200);
    });
  }
};
