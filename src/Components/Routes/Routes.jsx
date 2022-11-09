import React from "react";
import { Routes as ReactDomRoutes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Bio } from "../bio/Bio";
import { Home } from "../Home/Home";
import { Projects } from "../projects/Projects";
import { Technologies } from "../tech/Technologies";
export const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/technologies" element={<Technologies />} />
    </ReactDomRoutes>
  );
};
