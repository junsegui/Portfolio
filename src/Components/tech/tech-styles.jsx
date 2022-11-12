import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
export const Brown = styled.div`
  width: 65%;
  height: 100%;
  background-color: #352c2d;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const Back = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FirstPart = styled.div`
  width: 70%;
  height: 50%;
  border-bottom: 1.5px solid #e5d5cd;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const SecondPart = styled.div`
  width: 70%;
  height: 50%;
`;
export const TechTittle = styled.p`
  font-family: "Arimo";
  color: #e5d5cd;
  font-size: 3rem;
  font-weight: 700;
  @media (max-width: 550px) {
    font-size: 2.2rem;
  }
`;
export const UL = styled.ul`
  list-style: none;
  padding: 0;
`;
export const LI = styled.li`
  font-family: "Michroma";
  color: #e5d5cd;
  font-size: 1.6rem;
  @media (max-width: 550px) {
    font-size: 1.2rem;
  }
`;
export const Button = styled(NavLink)`
  width: 100px;
  border-radius: 100px;
  height: 100px;
  background-color: #352c2d;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px) {
    width: 50px;
    height: 50px;
  }
`;
export const Icon = styled(FontAwesomeIcon)`
  color: #e5d5cd;
  font-size: 2rem;
`;
