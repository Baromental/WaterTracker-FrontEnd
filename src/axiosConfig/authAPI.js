import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://water-tracker-backend-oo69.onrender.com/api/',
});

export const setToken = token => {
  authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const removeToken = () => {
  authApi.defaults.headers.common.Authorization = ``;
};
