import React from "react";
import { Center, DesktopNavbarStyled, LI, UL } from "./DesktopNavbarStyled";

export const DesktopNavbar = () => {
  return (
    <DesktopNavbarStyled>
      <Center>
        <UL>
          <LI>BIO</LI>
          <LI>PROJECTS</LI>
          <LI>CONTACTAME</LI>
        </UL>
      </Center>
    </DesktopNavbarStyled>
  );
};
