import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginThunk, registerThunk } from './auth/operations';
import { toast } from 'react-toastify';

const slice = createSlice({
  name: 'loading',
  initialState: { loading: false },
  selectors: {
    selectIsLoading: state => state.loading,
    selectIsRefresh: state => state.isRefresh,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.loading = true;
          // state.isRefresh = true;
        }
      )
      .addMatcher(
        action =>
          action.type.endsWith('/rejected') ||
          action.type.endsWith('/fulfilled'),
        state => {
          state.loading = false;
          // state.isRefresh = false;
        }
      );
  },
});

export const loadingReducer = slice.reducer;

export const { selectIsLoading, selectIsRefresh } = slice.selectors;
