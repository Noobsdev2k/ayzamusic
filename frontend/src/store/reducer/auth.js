import { createSlice } from "@reduxjs/toolkit";

import { notification } from "antd";
import {
  getProfile,
  loginGoogle,
  postLogout,
  signIn,
  signUp,
} from "../actions/auth";
import { stateAuth } from "../state/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: stateAuth,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginGoogle.pending, (state) => {
        state.loadingGoogle = true;
      })
      .addCase(loginGoogle.fulfilled, (state, action) => {
        const { data, accessToken } = action.payload;
        state.loadingGoogle = false;
        state.data = data;
        state.accessToken = accessToken;
        localStorage.setItem("accessToken", accessToken);
        notification.success({
          message: "Đăng nhập thành công",
        });
      })
      .addCase(loginGoogle.rejected, (state) => {
        state.loadingGoogle = false;
        state.error = true;
        notification.error({
          message: "Đăng nhập thất bại",
        });
      });
    // getProfile
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        const { data, accessToken } = action.payload;
        state.loading = false;
        state.data = data;
        state.accessToken = accessToken;
      })
      .addCase(getProfile.rejected, (state) => {
        state.loading = false;
        state.accessToken = "";
        localStorage.removeItem("accessToken");
      });
    // login
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        const { data, accessToken } = action.payload;
        state.data = data;
        state.accessToken = accessToken;
        state.loading = false;
        localStorage.setItem("accessToken", accessToken);
        notification.success({
          message: "Đăng nhập thành công",
        });
      })
      .addCase(signIn.rejected, (state) => {
        state.loading = false;
        notification.error({
          message: "Tài khoản hoặc mật khẩu không đúng!",
        });
      });
    //  log out the user
    builder.addCase(postLogout.fulfilled, (state) => {
      state.data = {};
      state.accessToken = "";
      localStorage.removeItem("accessToken");
      notification.success({
        message: "Đăng xuất thành công",
      });
    });
    // register
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        const { data, accessToken } = action.payload;
        state.data = data;
        state.accessToken = accessToken;
        state.loading = false;
        localStorage.setItem("accessToken", accessToken);
        notification.success({
          message: "Đăng ký thành công",
        });
      })
      .addCase(signUp.rejected, (state) => {
        state.loading = false;
        notification.error({
          message: "Tài khoản này đã tồn tại!",
        });
      });
  },
});
const { reducer } = authSlice;
export const accountStore = (state) => state.auth;
export default reducer;
