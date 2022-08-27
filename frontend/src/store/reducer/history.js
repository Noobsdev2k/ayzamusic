import { createSlice } from "@reduxjs/toolkit";

import { postLogout } from "../actions/auth";
import { getLayHistory, postPlayHistory } from "../actions/history";
import { initialStatePlayList } from "../state/history";

const PlayHistorySlice = createSlice({
  name: "playHistory",
  initialState: initialStatePlayList,
  reducers: {
    onLogOutRemoveData: (state) => {
      state.data = [];
      state.pagination = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postPlayHistory.fulfilled, (state, action) => {
      const { data } = action.payload;
      const index = state.data.findIndex((i) => i._id === data.id_music);
      if (state.pagination._total) {
        if (index > -1) state.data.splice(index, 1);
        state.data.unshift(data.music);
      }
    });
    // get play history
    builder
      .addCase(getLayHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLayHistory.fulfilled, (state, action) => {
        const { pagination, data } = action.payload;
        state.loading = false;
        state.pagination = pagination;
        data.forEach((i) => {
          state.data.push(i.music);
        });
      })
      .addCase(getLayHistory.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
    builder.addCase(postLogout.fulfilled, (state) => {
      state.data = [];
      state.pagination = {};
    });
  },
});
const { reducer, actions } = PlayHistorySlice;
export const { onLogOutRemoveData } = actions;
export default reducer;
