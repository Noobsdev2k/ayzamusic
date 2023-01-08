import { createAsyncThunk } from "@reduxjs/toolkit";
import musicAPI from "../../api/music";

export const getMusicById = createAsyncThunk(
  "music/get-by-id",
  async (params) => {
    const response = await musicAPI.getMusic(params);
    return response.data;
  }
);
