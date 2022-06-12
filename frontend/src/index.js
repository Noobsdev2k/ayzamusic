import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import moment from "moment";
import "antd/dist/antd.css";
import "moment/locale/vi";
import { Provider } from "react-redux";
import store from "./store/store";

moment.locale("vi");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
