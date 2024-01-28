import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./Redux/Store";
// imported styling for index page
import "./Styles/index.css";
// imported redux store so all the components will have access to redux
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
