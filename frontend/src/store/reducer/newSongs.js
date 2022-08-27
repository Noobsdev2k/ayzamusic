import { createSlice } from "@reduxjs/toolkit";
import { getNewMusic } from "../actions/newSongs";
import { stateSongs } from "../state/songs";

const NewSongsSlice = createSlice({
  name: "newSongs",
  initialState: stateSongs,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewMusic.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNewMusic.fulfilled, (state, action) => {
        const { data, pagination } = action.payload;
        state.data = data;
        state.pagination = pagination;
        state.loading = false;
      })
      .addCase(getNewMusic.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});
const { reducer } = NewSongsSlice;
export const newMusicStore = (state) => state.newSongs;
export default reducer;
