import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import "./styles/style.css";
import Loader from "./components/Loader/Loader";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  
  <BrowserRouter>
  <Loader />
    <App />
    <Dashboard/>
  </BrowserRouter>
    
  </>
);
