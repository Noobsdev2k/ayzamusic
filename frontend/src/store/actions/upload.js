import { createAsyncThunk } from "@reduxjs/toolkit";
import uploadMusicApi from "../../api/uploadMusic";

export const getUploadMusic = createAsyncThunk(
  "music/get-upload",
  async (params) => {
    const response = await uploadMusicApi.getUploadMusic(params);
    return response.data;
  }
);

export const postUploadMusic = createAsyncThunk(
  "music/create",
  async (data) => {
    const response = await uploadMusicApi.postUploadMusic(data);
    return response.data;
  }
);

export const deleteMusic = createAsyncThunk("music/delete", async (params) => {
  const response = await uploadMusicApi.deleteMusic(params);
  return response.data;
});

export const editUploadMusic = createAsyncThunk("music/edit", async (data) => {
  const response = await uploadMusicApi.editUploadMusic(data);
  return response.data;
});
