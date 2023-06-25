import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";

const hasToken = Boolean(localStorage.getItem("token"));
const type = JSON.parse(localStorage.getItem("user"))?.type;

const handleAuth = (route, key) => {
  const publicRoutes = [
    "/",
    "/login",
    "/signup",
    "/signup/client",
    "/signup/freelancer",
  ];

  if (publicRoutes.includes(route.path)) {
    if (hasToken) {
      if (type === "Freelancer")
        return (
          <Route
            key={key}
            path={route.path}
            element={<Navigate to="/feeds" />}
          />
        );
      if (type === "Employer")
        return (
          <Route
            key={key}
            path={route.path}
            element={<Navigate to="/client" />}
          />
        );
    }

    return <Route key={key} path={route.path} element={route.element} />;
  }
  return <Route key={key} path={route.path} element={route.element} />;
};

const Navigation = () => {
  return <Routes>{routes.map((route, key) => handleAuth(route, key))}</Routes>;
};

export default Navigation;
