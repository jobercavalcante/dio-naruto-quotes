import React from "react";
import ReactDOM from "react-dom";
import App from "./Redir";
import { GlobalStyle } from "./components/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
