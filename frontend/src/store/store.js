import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/auth";
import historyReducer from "./reducer/history";
export default configureStore({
  reducer: {
    auth: authReducer,
    history: historyReducer,
  },
});
