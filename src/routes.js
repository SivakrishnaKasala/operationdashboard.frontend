import React from "react";
import Register from "./views/auth/Register";
import Login from "./views/auth/Login";

const routes = [
  {
    path: "/login",
    name: "Login",
    miniName: "L",
    component: Login,
    layout: "/auth",
    isMenuItem: false,
  },
  {
    path: "/register",
    name: "Register",
    miniName: "R",
    component: Register,
    layout: "/auth",
    isMenuItem: false,
  },
];

export default routes;
