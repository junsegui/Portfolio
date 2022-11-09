import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Back,
  Brown,
  Button,
  Container,
  FirstPart,
  Icon,
  LI,
  SecondPart,
  TechTittle,
  UL,
} from "./tech-styles";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export const Technologies = () => {
  const location = useLocation();
  console.log(location.pathname == "/technologies");
  return (
    <>
      <Container>
        <Brown>
          <FirstPart>
            <TechTittle>FRONT-END</TechTittle>

            <UL>
              <LI>HTML</LI>
              <LI>CSS</LI>
              <LI>SASS</LI>
              <LI>JavaScript</LI>
              <LI>React</LI>
            </UL>
          </FirstPart>
          <SecondPart>
            <TechTittle>BACK-END</TechTittle>
            <UL>
              <LI>NodeJs</LI>
              <LI>Mongo</LI>
              <LI>Postgres</LI>
              <LI>Expres</LI>
              <LI>TypeScript</LI>
            </UL>
          </SecondPart>
        </Brown>
        <Back>
          <Button to="/">
            <Icon icon={faArrowLeft} />
          </Button>
        </Back>
      </Container>
    </>
  );
};
