import React from "react";
import {
  Exit,
  ExitContainer,
  Links,
  ListContainer,
  ModalContainer,
} from "./styles-modal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Modal = ({ visible, isVisible }) => {
  return (
    <ModalContainer
      initial={{ translateY: -150 }}
      animate={{ translateY: 20 }}
      exit={{ translateY: -500 }}
      transition={{ type: "spring", damping: 10 }}
    >
      <ExitContainer>
        <Exit icon={faXmark} onClick={(e) => isVisible(!visible)} />
      </ExitContainer>
      <ListContainer>
        <Links to="/">Home</Links>
        <Links to="/bio">Bio</Links>
        <Links to="/projects">Projects</Links>
        <Links to="/technologies">Technologies</Links>
      </ListContainer>
    </ModalContainer>
  );
};
