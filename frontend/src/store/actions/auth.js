import { createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../api/auth";

export const loginGoogle = createAsyncThunk(
  "auth/google-login",
  async (token) => {
    const response = await authAPI.loginGoogle(token);
    return response;
  }
);

export const getProfile = createAsyncThunk("auth/profile", async () => {
  const response = await authAPI.getProfile();
  return response.data;
});

export const signIn = createAsyncThunk("auth/login", async (data) => {
  const response = await authAPI.signIn(data);
  return response.data;
});

export const signUp = createAsyncThunk("auth/signup", async (data) => {
  const response = await authAPI.signUp(data);
  return response.data;
});

export const postLogout = createAsyncThunk("auth/logout", () => {
  return;
});
