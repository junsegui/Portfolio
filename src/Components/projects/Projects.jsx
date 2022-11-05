import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { Container, Date, LI, Redirect, Tittle, UL } from "./styled-projects";

export const Projects = () => {
  return (
    <Container>
      <UL>
        <LI>
          <Tittle>Project Kos</Tittle>
          <Date>2022</Date>
          <Redirect>flecha</Redirect>
        </LI>
        <LI>
          <Tittle>Kanbam</Tittle>
          <Date>2022</Date>
          <Redirect>flecha</Redirect>
        </LI>
        <LI>
          <Tittle>X</Tittle>
          <Date>2022</Date>
          <Redirect>
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </Redirect>
        </LI>
      </UL>
    </Container>
  );
};
