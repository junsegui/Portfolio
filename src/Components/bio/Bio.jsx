import React from "react";
import {
  Container,
  Icon,
  Presentation,
  TextContainer,
  Tittle,
} from "./bio-styles";
import { faCode, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "../Navbar/Navbar";

export const Bio = () => {
  return (
    <>
      <Navbar />
      <Container>
        <TextContainer>
          <Tittle>Hi! this is me:</Tittle>
          <Presentation>
            I'm a developer from Argentina, i have 22 years old and i really
            want to grow as a professional.
          </Presentation>
          <Presentation>
            I really like learning something new everyday so i keep constantly
            reading and looking for new information.
          </Presentation>
          <Presentation></Presentation>
        </TextContainer>
        <TextContainer>
          <Icon icon={faMugHot} />
        </TextContainer>
      </Container>
    </>
  );
};
