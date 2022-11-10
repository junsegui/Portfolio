import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const MobileNavbarContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #332e2e;
  @media (min-width: 769px) {
    display: none;
  }
`;
export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  margin-right: 5%;
  color: #e5d5cd;
`;
