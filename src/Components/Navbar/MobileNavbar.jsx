import React, { useState } from "react";
import { Icon, MobileNavbarContainer } from "./MobileNavbarStyled";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "./modal/Modal";

import { useDispatch } from "react-redux";

export const MobileNavbar = () => {
  const [visible, isVisible] = useState(false);

  const dispatch = useDispatch;
  return (
    <MobileNavbarContainer>
      {visible && <Modal isVisible={isVisible} visible={visible} />}
      <Icon icon={faBars} onClick={(e) => isVisible(!visible)} />
    </MobileNavbarContainer>
  );
};
