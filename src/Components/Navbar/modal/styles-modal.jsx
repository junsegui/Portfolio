import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ModalContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #332e2e;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ExitContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  justify-content: flex-end;
`;
export const Exit = styled(FontAwesomeIcon)`
  color: #e5d5cd;
  margin-top: 40%;
  margin-right: 5%;
  font-size: 2rem;
  margin-bottom: 5%;
  @media (max-width: 425px) {
    margin-top: 50%;
  }
  @media (max-width: 320px) {
    margin-top: 60%;
  }
`;
export const ListContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;
export const Links = styled(NavLink)`
  font-size: 2rem;
  color: #e5d5cd;
  text-decoration: none;
  font-family: "Arimo";
  margin-bottom: 5%;
`;
