import styled from "styled-components";

export const DesktopNavbarStyled = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Arimo";
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Center = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  color: #5c504a;
  border-bottom: 2px solid #afa59f;
`;
export const UL = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: flex-end;
`;
export const LI = styled.li`
  width: 8%;
  color: #100c0b;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1%;
  font-weight: 800;
`;
