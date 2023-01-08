import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { postLogout } from "../actions/auth";
import {
  deleteMusic,
  editUploadMusic,
  getUploadMusic,
  postUploadMusic,
} from "../actions/upload";
import { stateUpload } from "../state/upload";

const UploadMusicSlice = createSlice({
  name: "uploadMusic",
  initialState: stateUpload,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUploadMusic.pending, (state) => {
        state.loading = true;
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      })
      .addCase(getUploadMusic.fulfilled, (state, action) => {
        const { data, pagination } = action.payload;
        state.loading = false;
        state.data = data;
        state.pagination = pagination;
      })
      .addCase(getUploadMusic.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
    // create music
    builder
      .addCase(postUploadMusic.pending, (state) => {
        state.loadingUploadMusic = true;
        state.statusUploadMusic = "pending";
      })
      .addCase(postUploadMusic.fulfilled, (state, action) => {
        const data = action.payload.data;
        state.data.unshift(data);
        state.statusUploadMusic = "upload";
        state.loadingUploadMusic = false;
        notification["success"]({
          message: "Thông Báo",
          description: "Bài hát đã được tải lên, cảm ơn sự đóng góp của bạn.",
        });
      })
      .addCase(postUploadMusic.rejected, (state) => {
        state.loadingUploadMusic = false;
        state.error = true;
        state.statusUploadMusic = "error";
      });
    // edit upload music
    builder
      .addCase(editUploadMusic.pending, (state) => {
        state.loadingUploadMusic = true;
        state.statusUploadMusic = "pending";
      })
      .addCase(editUploadMusic.fulfilled, (state, action) => {
        const data = action.payload.data;
        const index = state.data.findIndex((item) => item._id === data._id);
        if (index !== -1) state.data[index] = data;
        state.loadingUploadMusic = false;
        state.statusUploadMusic = "edit";
        notification["success"]({
          message: "Thông Báo",
          description: "Bài hát đã được cập nhật thành công.",
        });
      })
      .addCase(editUploadMusic.rejected, (state) => {
        state.loadingUploadMusic = false;
        notification["error"]({
          message: "Thông Báo",
          description: "Có lỗi xảy ra, vui lòng thử lại sau.",
        });
      });
    // delete music
    builder
      .addCase(deleteMusic.pending, (state) => {
        state.loadingDeleteMusic = true;
      })
      .addCase(deleteMusic.fulfilled, (state, action) => {
        const id = action.payload._id;
        const index = state.data.findIndex((music) => music._id === id);
        if (index !== -1) state.data.splice(index, 1);
        notification["success"]({
          message: "Thông Báo",
          description: "Bài hát đã được xóa.",
        });
        state.loadingDeleteMusic = false;
      })
      .addCase(deleteMusic.rejected, (state) => {
        state.loadingDeleteMusic = false;
        notification["error"]({
          message: "Thông Báo",
          description: "Có lỗi xảy ra, vui lòng thử lại sau.",
        });
      });
    // postLogout
    builder.addCase(postLogout.fulfilled, (state) => {
      state.data = [];
      state.pagination = {};
      state.loading = false;
    });
  },
});

const { reducer } = UploadMusicSlice;
export const uploadMusicStore = (state) => state.uploadMusic;
export default reducer;
