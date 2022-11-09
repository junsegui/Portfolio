import React from "react";
import { Container, Welcome } from "./SideBarStyles";
import welcome from "../../assets/WELCOME.svg";
import { useLocation } from "react-router-dom";

export const SideBar = () => {
  const location = useLocation();
  console.log(location.pathname == "/technologies");
  return (
    <Container>
      {location.pathname != "/technologies" ? <Welcome src={welcome} /> : []}
    </Container>
  );
};
