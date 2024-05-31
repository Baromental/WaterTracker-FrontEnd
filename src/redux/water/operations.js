import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../axiosConfig/authAPI.js';

export const addWaterThunk = createAsyncThunk(
  'addWater',
  async (waterData, thunkAPI) => {
    try {
      const { data } = await authApi.post('water', waterData);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const editWaterThunk = createAsyncThunk(
  'editWater',
  async (waterData, thunkAPI) => {
    try {
      const { data } = await authApi.patch(`water/${waterData.id}`, waterData);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteWaterThunk = createAsyncThunk(
  'deleteWater',
  async (waterData, thunkAPI) => {
    try {
      const { data } = await authApi.patch(`water/${waterData.id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchWaterDataTodayThunk = createAsyncThunk(
  'fetchWaterDataToday',
  async (_, thunkAPI) => {
    try {
      const { data } = await authApi.get('water/today');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
