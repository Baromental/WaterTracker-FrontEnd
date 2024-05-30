import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi, setToken, removeToken } from '../../axiosConfig/authAPI.js';

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authApi.post('users/register', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authApi.post('users/login', credentials);
      console.log(data);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    const { data } = await authApi.delete('users/logout');
    removeToken();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
