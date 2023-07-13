import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App";
import { ScrollToTop } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
      <ToastContainer
        closeButton={false}
        position={"bottom-center"}
        theme={"colored"}
        autoClose={2700}
      />
    </BrowserRouter>
  </React.StrictMode>
);
