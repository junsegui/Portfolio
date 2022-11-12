import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faCircleRight,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";
import { A, Container, Date, Icon, LI, Tittle, UL } from "./styled-projects";
import { Tooltip } from "../tooltip/Tooltip";
import { ToooltipTarget } from "../tooltip/tooltip-styled";
import { Navbar } from "../Navbar/Navbar";

export const Projects = () => {
  return (
    <>
      <Navbar />
      <Container>
        <UL>
          <LI>
            <Tittle>Project Kos</Tittle>
            <Tooltip
              text="E-commerce made entirely with React using Redux,Styled-Components,React Router and Firebase."
              position="bottom"
            >
              <ToooltipTarget>
                <Icon icon={faQuestionCircle} />
              </ToooltipTarget>
            </Tooltip>
            <A href="https://project-kos.vercel.app/">
              <Icon icon={faCircleRight} />
            </A>
          </LI>
          <LI>
            <Tittle>Kanban</Tittle>
            <Tooltip
              text="Kanban app made with React using TypeScript, Redux and Styled-Components."
              position="bottom"
            >
              <ToooltipTarget>
                <Icon icon={faQuestionCircle} />
              </ToooltipTarget>
            </Tooltip>
            <A href="https://kanban-app-three.vercel.app/">
              <Icon icon={faCircleRight} />
            </A>
          </LI>
        </UL>
      </Container>
    </>
  );
};
