import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../axiosConfig/authAPI.js';

export const addWaterThunk = createAsyncThunk(
  'addWater',
  async (waterData, thunkAPI) => {
    try {
      const { data } = await authApi.post('water', waterData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const editWaterThunk = createAsyncThunk(
  'editWater',
  async (waterData, thunkAPI) => {
    const { amount, date, id } = waterData;
    try {
      const { data } = await authApi.patch(`water/${id}`, { amount, date });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteWaterThunk = createAsyncThunk(
  'deleteWater',
  async (waterData, thunkAPI) => {
    console.log(waterData);
    try {
      const { data } = await authApi.delete(`water/${waterData.id}`);
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
