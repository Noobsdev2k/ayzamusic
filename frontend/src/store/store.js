import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/auth";
import historyReducer from "./reducer/history";
import modalReducer from "./reducer/modal";
import newSongsReducer from "./reducer/newSongs";
export default configureStore({
  reducer: {
    auth: authReducer,
    history: historyReducer,
    modal: modalReducer,
    newSongs: newSongsReducer,
  },
});
