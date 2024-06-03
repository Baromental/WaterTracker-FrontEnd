import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi, setToken, removeToken } from '../../axiosConfig/authAPI.js';

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authApi.post('auth/register', credentials);
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
      const { data } = await authApi.post('auth/login', credentials);
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
    const { data } = await authApi.delete('auth/logout');
    removeToken();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token;
  if (!savedToken) {
    return thunkApi.rejectWithValue('Token is not exist!');
  }
  try {
    setToken(savedToken);
    const { data } = await authApi.get('user/current');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getWaterRateThunk = createAsyncThunk(
  'getWaterRate',
  async (_, thunkApi) => {
    try {
      const { data } = await authApi.get('user/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  'updateUser',
  async (body, thunkAPI) => {
    try {
      const { data } = await authApi.patch('user/setting', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  'updateAvatar',
  async (formData, thunkAPI) => {
    try {
      const response = await authApi.patch('user/avatars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
