import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import "./styles/style.css";
import Loader from "./components/Loader/Loader";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Loader />
    <App />
  </>
);
