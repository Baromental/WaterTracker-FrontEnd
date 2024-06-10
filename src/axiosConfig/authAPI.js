import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export const setToken = token => {
  authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const removeToken = () => {
  authApi.defaults.headers.common.Authorization = ``;
};
