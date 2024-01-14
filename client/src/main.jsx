import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {Provider} from "react-redux";
import {store} from "./store/store.js";
import {BrowserRouter as Router} from "react-router-dom";
import {Toaster} from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <Toaster />
      <App />
    </Router>
  </Provider>
);
