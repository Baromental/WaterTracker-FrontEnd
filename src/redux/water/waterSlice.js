import { createSlice } from '@reduxjs/toolkit';

import {
  addWaterThunk,
  deleteWaterThunk,
  editWaterThunk,
  fetchWaterDataTodayThunk,
} from './operations';

const initialState = {
  percent: 0,
  notes: [],
};

const slice = createSlice({
  name: 'water',
  initialState,
  selectors: {
    selectNotes: state => state.notes,
  },
  extraReducers: builder => {
    builder
      .addCase(addWaterThunk.fulfilled, (state, { payload }) => {
        state.notes.push(payload);
      })
      .addCase(editWaterThunk.fulfilled, (state, { payload }) => {
        const index = state.notes.findIndex(note => note.id === payload.id);
        state.notes.splice(index, 1, payload);
      })
      .addCase(deleteWaterThunk.fulfilled, (state, { payload }) => {
        state.notes = state.notes.filter(note => note.id !== payload.id);
      })
      .addCase(fetchWaterDataTodayThunk.fulfilled, (state, { payload }) => {
        state.notes = payload.result;
        state.percent = payload.percent;
      });
  },
});

export const waterReducer = slice.reducer;
export const { selectNotes } = slice.selectors;
