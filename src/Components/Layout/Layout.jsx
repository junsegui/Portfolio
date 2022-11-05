import React from "react";
import { LayoutStyled } from "./LayoutStyled";

export const Layout = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};
