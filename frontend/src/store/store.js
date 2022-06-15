import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/auth";
import historyReducer from "./reducer/history";
import modalReducer from "./reducer/modal";
export default configureStore({
  reducer: {
    auth: authReducer,
    history: historyReducer,
    modal: modalReducer,
  },
});
