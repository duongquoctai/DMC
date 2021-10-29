import axios, { requestAll } from '../utils/httpServices';

import {
  OVERVIEW_GENERAL_ENDPOINT,
  OVERVIEW_NEW_ENDPOINT,
  OVERVIEW_CHURN_ENDPOINT,
  OVERVIEW_FILTER_ENDPOINT
} from './endpoint';

export const overviewService = {
  /**
   * OVERVIEW FILTERS
   */
  _fetchFiltersFields: (params = {}) => {
    const endpoint = `${OVERVIEW_FILTER_ENDPOINT}/fields`;
    return axios.get(endpoint, params);
  },

  _fetchFiltersFieldDetail: (params = {}) => {
    const endpoint = `${OVERVIEW_FILTER_ENDPOINT}/fields/detail`;
    return axios.get(endpoint, params);
  },

  /**
   * OVERVIEW GROUP GENERAL
   */

  // CHART ID 09
  _fetchNumOfContractByStatus: (params = {}) => {
    const endpoint = `${OVERVIEW_GENERAL_ENDPOINT}/chartId09`;
    return axios.get(endpoint, params);
  },

  // CHART ID 10
  _fetchProportionContractAttribute: (params = {}) => {
    const endpoint = `${OVERVIEW_GENERAL_ENDPOINT}/chartId10`;
    return axios.get(endpoint, params);
  },

  // CHART ID 11
  _fetchNumOfContractByRegion: (params = {}) => {
    const endpoint = `${OVERVIEW_GENERAL_ENDPOINT}/chartId11`;
    return axios.get(endpoint, params);
  },

  // CHART ID 12
  _fetchNumOfContractByCurrentPackage: (params = {}) => {
    const endpoint = `${OVERVIEW_GENERAL_ENDPOINT}/chartId12`;
    return axios.get(endpoint, params);
  },

  // CHART ID 14
  _fetchNumOfContractServiceUsed: (params = {}) => {
    const endpoint = `${OVERVIEW_GENERAL_ENDPOINT}/chartId14`;
    return axios.get(endpoint, params);
  },

  // CHART ID 15
  _fetchServiceContractChanged: (params = {}) => {
    const endpoint = `${OVERVIEW_GENERAL_ENDPOINT}/chartId15`;
    return axios.get(endpoint, params);
  },

  // FETCH ALL GENERAL GROUP DATA
  _fetchAllGeneralGroupData: (params = {}) => {
    const keys = [
      'numOfContractByStatus',
      'proportionContractAttribute',
      'numOfContractByRegion',
      'numOfContractByCurrentPackage',
      'numOfContractServiceUsed',
      'serviceContractChanged'
    ];
    const requests = [
      _fetchNumOfContractByStatus(params),
      _fetchProportionContractAttribute(params),
      _fetchNumOfContractByRegion(params),
      _fetchNumOfContractByCurrentPackage(params),
      _fetchNumOfContractServiceUsed(params),
      _fetchServiceContractChanged(params)
    ];

    return requestAll(requests, keys);
  },

  /**
   * OVERVIEW GROUP NEW
   */

  // CHART ID 16
  _fetchNumOfNewContractMom: (params = {}) => {
    const endpoint = `${OVERVIEW_NEW_ENDPOINT}/chartId16`;
    return axios.get(endpoint, params);
  },

  // CHART ID 20
  _fetchNumOfNewContractByHousehold: (params = {}) => {
    const endpoint = `${OVERVIEW_NEW_ENDPOINT}/chartId20`;
    return axios.get(endpoint, params);
  },

  // FETCH ALL NEW GROUP DATA
  _fetchAllNewGroupData: (params = {}) => {
    const keys = ['numOfNewContractMom', 'numOfNewContractByHousehold'];
    const requests = [
      _fetchNumOfNewContractMom(params),
      _fetchNumOfNewContractByHousehold(params)
    ];
    return requestAll(requests, keys);
  },

  /**
   * OVERVIEW GROUP CHURN
   */

  // CHART ID 21
  _fetchNumChurnContractMom: (params = {}) => {
    const endpoint = `${OVERVIEW_CHURN_ENDPOINT}/chartId21`;
    return axios.get(endpoint, params);
  },

  // CHART ID 22
  _fetchNumOfContractChurned: (params = {}) => {
    const endpoint = `${OVERVIEW_CHURN_ENDPOINT}/chartId22`;
    return axios.get(endpoint, params);
  },

  // CHART ID 23
  _fetchNumChurnContractByAgeSegment: (params = {}) => {
    const endpoint = `${OVERVIEW_CHURN_ENDPOINT}/chartId23`;
    return axios.get(endpoint, params);
  },

  // FETCH ALL NEW GROUP DATA
  _fetchAllChurnGroupData: (params = {}) => {
    const keys = [
      'numChurnContractMom',
      'numOfContractChurned',
      'numChurnContractByAgeSegment'
    ];
    const requests = [
      _fetchNumChurnContractMom(params),
      _fetchNumOfContractChurned(params),
      _fetchNumChurnContractByAgeSegment(params)
    ];
    return requestAll(requests, keys);
  }
};
