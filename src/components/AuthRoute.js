import React from "react";
import {Sign_in, Validation} from "../pages"
import { Route, Navigate } from "react-router-dom";

function AuthRoute({ authenticated, component: Component, render, ...rest }) {
  return (
    <Route
      path={(props) => authenticated ? Validation : Sign_in} element={<Sign_in/>}
    />
  );
}

export default AuthRoute;