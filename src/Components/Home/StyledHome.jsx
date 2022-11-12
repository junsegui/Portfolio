import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 95%;
  height: 80%;
  margin-left: 3%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 550px) {
    height: 75vh;
  }
`;
export const Tittle = styled.h1`
  font-family: "Arimo";
  font-size: 8rem;
  width: 20%;
  margin: 0;
  margin-left: 2%;
  color: #332e2e;
  @media (max-width: 1024px) {
    font-size: 6rem;
  }
  @media (max-width: 550px) {
    font-size: 4rem;
  }
`;
export const Description = styled.p`
  font-family: "Michroma";
  font-size: 1.8rem;
  width: 30%;
  margin-left: 2%;
  font-weight: 700;
  color: #332e2e;
  @media (max-width: 1024px) {
    font-size: 1.4rem;
    width: 50%;
  }
  @media (max-width: 550px) {
    font-size: 1.2rem;
    width: 60%;
  }
`;
export const Line = styled.div`
  width: 75%;
  border-bottom: 2px solid #afa59f;
`;
export const CC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const Logo = styled.img`
  width: 30%;
  height: 50%;
  position: fixed;
  right: -5%;
  bottom: -10%;
  @media (max-width: 1024px) {
    width: 40%;
  }
  @media (max-width: 550px) {
    bottom: 10%;
    position: absolute;
    height: 150px;
    width: 120px;
    right: 0%;
  }
`;
