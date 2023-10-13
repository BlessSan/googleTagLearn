import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TagManager from "react-gtm-module";
const env = process.env.NODE_ENV;

const tagManagerArgs = {
  gtmId: "GTM-MRZD3KXT",
  auth:
    env === "development" ? "BMlPPD-AeFG8IJ2v7Lo8FQ" : "Qz4fQZm6TKhO60lmlXIXdw",
  preview: env === "development" ? "env-4" : "env-1",
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
