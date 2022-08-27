import { createSlice } from "@reduxjs/toolkit";
import { stateModal } from "../state/modal";

const modalSlice = createSlice({
  name: "modal",
  initialState: stateModal,
  reducers: {
    openModal: (state, action) => {
      const { type, title, others, _id } = action.payload;
      state.open = true;
      state.type = type;
      state.title = title;
      state.others = others;
      state._id = _id;
    },
  },
});
const { actions, reducer } = modalSlice;
export const { openModal } = actions;
export default reducer;
export const modalStore = (state) => state.modal;
