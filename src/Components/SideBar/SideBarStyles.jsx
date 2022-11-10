import styled from "styled-components";

export const Container = styled.div`
  width: 5%;
  height: 100vh;
  background-color: #352c2d;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Welcome = styled.img`
  position: absolute;
  transform: rotate(-90deg);
  width: 15%;
  right: 90%;
  top: -5%;
`;
