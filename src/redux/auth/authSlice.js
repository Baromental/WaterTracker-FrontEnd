import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

const initialState = {
  user: {
    username: '',
    email: '',
  },
  token: null,
  loading: false,
  error: false,
  isLoggedIn: false,
  isRefresh: false,
  balance: 0,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectUser: state => state.user,
    selectIsLoggedIn: state => state.isLoggedIn,
    selectToken: state => state.isLoggedIn,
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
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.username = payload.username;
        state.user.email = payload.email;
        state.balance = payload.balance;
        state.isLoggedIn = true;
        state.loading = false;
        state.isRefresh = false;
        state.loading = false;
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
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
        state.isRefresh = false;
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
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
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          refreshThunk.pending
        ),
        state => {
          state.loading = true;
          state.error = null;
          state.isRefresh = true;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          refreshThunk.rejected
        ),
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
  selectUser,
  selectToken,
  selectIsRefresh,
  selectBalance,
  selectIsLoading,
} = slice.selectors;
export const { logout } = slice.actions;
