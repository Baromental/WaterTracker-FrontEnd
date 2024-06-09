import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
  updateAvatarThunk,
  updateUserThunk,
  updateWaterRateThunk,
} from './operations';

const initialState = {
  name: '',
  email: '',
  password: '',
  gender: '',
  waterRate: 1.5,
  avatarURL: '',
  token: null,
  loading: false,
  error: null,
  isLoggedIn: false,
  isRefresh: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectName: state => state.name,
    selectGender: state => state.gender,
    selectEmail: state => state.email,
    selectWaterRate: state => state.waterRate,
    selectAvatarURL: state => state.avatarURL,
    selectIsLoggedIn: state => state.isLoggedIn,
    selectToken: state => state.token,
    selectIsRefresh: state => state.isRefresh,
    selectIsLoading: state => state.loading,
  },
  reducers: {
    logout: state => {
      return initialState;
    },

    setName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.password = payload.password;
        state.gender = payload.gender;
        state.waterRate = payload.waterRate;
        state.avatarURL = payload.avatarURL;
        state.token = payload.token;
        state.loading = false;
        state.isLoggedIn = true;
        state.loading = false;
        state.isRefresh = false;
      })
      .addCase(logoutThunk.fulfilled, state => {
        return initialState;
      })
      // .addCase(registerThunk.rejected, (state, { payload }) => {
      //   state.error = payload;
      //   state.loading = false;
      //   state.isRefresh = false;
      //   toast.error(payload);
      // })
      // .addCase(loginThunk.rejected, (state, { payload }) => {
      //   state.error = payload;
      //   state.loading = false;
      //   state.isRefresh = false;
      //   toast.error(payload);
      // })
      .addCase(updateAvatarThunk.fulfilled, (state, { payload }) => {
        state.avatarURL = payload.avatarURL;
        state.loading = false;
        state.isRefresh = false;
        toast.success(`The avatar has been downloaded successfully`);
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.password = payload.password;
        state.gender = payload.gender;
        state.loading = false;
        state.isRefresh = false;
        toast.success(`Data changed successfully`);
      })
      .addCase(updateWaterRateThunk.fulfilled, (state, { payload }) => {
        state.waterRate = payload.waterRate;
        toast.success(`Daily norma updated successfully`);
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.password = payload.password;
        state.gender = payload.gender;
        state.waterRate = payload.waterRate;
        state.avatarURL = payload.avatarURL;
        state.token = payload.token;
        state.loading = false;
        state.loading = false;
        state.isRefresh = false;
        toast.success(`You have successfully registered`);
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.password = payload.password;
        state.gender = payload.gender;
        state.waterRate = payload.waterRate;
        state.avatarURL = payload.avatarURL;
        state.token = payload.token;
        state.loading = false;
        state.isLoggedIn = true;
        state.loading = false;
        state.isRefresh = false;
        toast.success(`Welcome, ${payload.name || payload.email}`);
      })
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          refreshThunk.pending,
          updateUserThunk.pending,
          updateAvatarThunk.pending,
          updateWaterRateThunk.pending
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
          refreshThunk.rejected,
          updateUserThunk.rejected,
          updateAvatarThunk.rejected,
          updateWaterRateThunk.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.loading = false;
          state.isRefresh = false;
          console.log(payload);
          toast.error(payload);
        }
      );
  },
});

export const authReducer = slice.reducer;
export const {
  selectName,
  selectGender,
  selectEmail,
  selectWaterRate,
  selectAvatarURL,
  selectIsLoggedIn,
  selectToken,
  selectIsRefresh,
  selectIsLoading,
} = slice.selectors;
export const { logout, setName } = slice.actions;
