import { createAsyncThunk } from "@reduxjs/toolkit";
import PlayHistoryAPI from "../../api/history";

export const postPlayHistory = createAsyncThunk(
  "play-history/create",
  async (params) => {
    const response = await PlayHistoryAPI.postPlayHistory(params);
    return response;
  }
);

export const getLayHistory = createAsyncThunk(
  "play-history/get-by-token",
  async (params) => {
    const response = await PlayHistoryAPI.getLayHistory(params);
    return response;
  }
);
