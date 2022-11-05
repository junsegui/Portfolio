import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;
export const UL = styled.ul`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  align-items: center;
  padding: 0;
`;
export const LI = styled.li`
  display: flex;
  width: 85%;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1.5px solid #afa59f;

  transition: all 1s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;
export const Tittle = styled.span`
  width: 35%;
  font-family: "Arimo";
  color: #100c0b;
  font-size: 2.3rem;
  font-weight: 700;
  padding-bottom: 1%;
`;
export const Date = styled.span`
  font-family: "Arimo";
  color: #100c0b;
  font-size: 2rem;
`;
export const Redirect = styled.span``;
