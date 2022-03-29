import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <h1>hello world</h1>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
