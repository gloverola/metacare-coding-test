import React from "react";
import ReactDOM from "react-dom";
import FontStyles from "styles/fontStyles";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
