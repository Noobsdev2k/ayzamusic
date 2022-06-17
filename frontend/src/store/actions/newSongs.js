import { createAsyncThunk } from "@reduxjs/toolkit";

import musicAPI from "../../api/music";

export const getNewMusic = createAsyncThunk(
  "songs/get-all",
  async (params, { rejectWithValue }) => {
    try {
      const response = await musicAPI.getNewMusic(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
