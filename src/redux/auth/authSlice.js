import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { loginThunk, logoutThunk, registerThunk } from './operations';

const initialState = {
  username: '',
  email: '',
  token: null,
  loading: false,
  error: false,
  isLoggedIn: false,
  isRefresh: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectUsername: state => state.username,
    selectEmail: state => state.email,
    selectIsLoggedIn: state => state.isLoggedIn,
    selectToken: state => state.token,
    selectIsRefresh: state => state.isRefresh,
    selectBalance: state => state.balance,
    selectIsLoading: state => state.loading,
  },
  reducers: {
    logout: state => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(logoutThunk.fulfilled, state => {
        return initialState;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
        state.isRefresh = false;
        toast.error(payload);
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
        state.isRefresh = false;
        toast.error(payload);
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          console.log(payload);
          state.username = payload.username;
          state.email = payload.email;
          state.password = payload.password;
          state.token = payload.token;
          state.loading = false;
          state.isLoggedIn = true;
          state.loading = false;
          state.isRefresh = false;
          toast.success(`Welcome, ${payload.username}`);
        }
      )
      .addMatcher(isAnyOf(registerThunk.pending, loginThunk.pending), state => {
        state.loading = true;
        state.error = null;
        state.isRefresh = true;
      })
      .addMatcher(
        isAnyOf(registerThunk.rejected, loginThunk.rejected),
        (state, { payload }) => {
          state.error = payload;
          state.loading = false;
          state.isRefresh = false;
        }
      );
  },
});

export const authReducer = slice.reducer;
export const {
  selectIsLoggedIn,
  selectUsername,
  selectEmail,
  selectToken,
  selectIsRefresh,
  selectIsLoading,
} = slice.selectors;
export const { logout } = slice.actions;
