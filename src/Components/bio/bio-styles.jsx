import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
`;
export const Tittle = styled.h1`
  font-size: 4rem;
  font-family: "Arimo";
  color: #332e2e;
  letter-spacing: 1px;
  font-weight: 700;
  @media (max-width: 550px) {
    font-size: 2rem;
  }
`;
export const Presentation = styled.p`
  font-family: "Michroma";
  color: #332e2e;
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
  @media (max-width: 550px) {
    font-size: 1.2rem;
  }
`;
export const TextContainer = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled(FontAwesomeIcon)`
  width: 50%;
  height: 25%;
  color: #332e2e;
  @media (max-width: 550px) {
    width: 40%;
  }
`;
