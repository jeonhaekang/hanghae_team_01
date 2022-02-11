import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./shared/App";
import reportWebVitals from "./reportWebVitals";

// material ui
import { layout } from "./shared/material";

// router
import { BrowserRouter } from "react-router-dom";

// store
import { Provider } from "react-redux";
import store from "./redux/configStore";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <layout.Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          height: "100%",
          overflow: "hidden",
          backgroundColor: "#0a1929",
          paddingTop: "150px",
        }}
      >
        <layout.CssBaseline />
        <App />
      </layout.Box>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
