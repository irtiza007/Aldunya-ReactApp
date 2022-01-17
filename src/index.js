import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
if (process.env.API) axios.defaults.baseURL = process.env.API;
axios.defaults.baseURL = "https://physiotherapy-api.herokuapp.com/";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
