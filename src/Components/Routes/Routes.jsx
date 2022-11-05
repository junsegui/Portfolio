import React from "react";
import { Routes as ReactDomRoutes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Projects } from "../projects/Projects";
export const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </ReactDomRoutes>
  );
};
