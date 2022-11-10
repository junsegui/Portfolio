import React from "react";
import { Description, Line, StyledContainer, Tittle, Logo } from "./StyledHome";
import logo from "../../assets/SEE MY DEV STACK (1).svg";
import { Navbar } from "../Navbar/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <StyledContainer>
        <Tittle>JUAN SEGUI</Tittle>
        <Description>
          I'm a FullStack developer who wants to be a great professional capable
          of facing and solving any problem.
        </Description>

        <Line />

        <Logo src={logo} />
      </StyledContainer>
    </>
  );
};
