import React from "react";
import {
  Exit,
  ExitContainer,
  Links,
  ListContainer,
  ModalContainer,
} from "./styles-modal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Modal = ({ visible, isVisible }) => {
  return (
    <ModalContainer>
      <ExitContainer>
        <Exit icon={faXmark} onClick={(e) => isVisible(!visible)} />
      </ExitContainer>
      <ListContainer>
        <Links>Home</Links>
        <Links>Bio</Links>
        <Links>Projects</Links>
        <Links>Technologies</Links>
      </ListContainer>
    </ModalContainer>
  );
};
