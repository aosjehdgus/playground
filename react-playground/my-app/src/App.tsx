import React from "react";
import "./App.css";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
