import { apiConfig } from '../config';

export const OVERVIEW_ENDPOINT = '/overview';
export const OVERVIEW_GENERAL_ENDPOINT = `${OVERVIEW_ENDPOINT}/general`;
export const OVERVIEW_NEW_ENDPOINT = `${OVERVIEW_ENDPOINT}/new`;
export const OVERVIEW_CHURN_ENDPOINT = `${OVERVIEW_ENDPOINT}/churn`;
export const OVERVIEW_FILTER_ENDPOINT = `${OVERVIEW_ENDPOINT}/filters`;

export const LOGIN_ENDPOINT = '/login';
export const CENTRAL_LOGOUT_ENDPOINT = `${apiConfig.baseUrl}/centralLogout`;
export const LOGOUT_ENDPOINT = `${apiConfig.baseUrl}/logout`;
export const GET_TOKEN_ENDPOINT = `/getToken`;
export const VALIDATE_TOKEN_ENDPOINT = `/validateToken`;
