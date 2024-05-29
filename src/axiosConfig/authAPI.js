import axios from 'axios';

export const walletApi = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export const setToken = token => {
  walletApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const removeToken = () => {
  walletApi.defaults.headers.common.Authorization = ``;
};
