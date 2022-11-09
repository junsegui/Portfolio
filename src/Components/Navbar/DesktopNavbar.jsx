import React from "react";
import {
  Center,
  DesktopNavbarStyled,
  Home,
  LI,
  UL,
} from "./DesktopNavbarStyled";

export const DesktopNavbar = () => {
  return (
    <DesktopNavbarStyled>
      <Center>
        <UL>
          <Home to="/">HOME</Home>
          <LI to="/bio">BIO</LI>
          <LI to="/projects">PROJECTS</LI>
          <LI to="/technologies">TECHNOLOGIES</LI>
        </UL>
      </Center>
    </DesktopNavbarStyled>
  );
};
