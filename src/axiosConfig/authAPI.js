import axios from 'axios';

export const authApi = axios.create({
  baseURL: `${REACT_APP_API_URL}/api`,
});

export const setToken = token => {
  authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const removeToken = () => {
  authApi.defaults.headers.common.Authorization = ``;
};
