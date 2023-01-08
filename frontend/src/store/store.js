import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/auth";
import historyReducer from "./reducer/history";
import modalReducer from "./reducer/modal";
import newSongsReducer from "./reducer/newSongs";
import uploadReducer from "./reducer/upload";
import musicReducer from "./reducer/music";
export default configureStore({
  reducer: {
    auth: authReducer,
    history: historyReducer,
    modal: modalReducer,
    newSongs: newSongsReducer,
    uploadMusic: uploadReducer,
    music: musicReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
