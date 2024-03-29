import React, { useState } from "react";
import { Icon, MobileNavbarContainer } from "./MobileNavbarStyled";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "./modal/Modal";
import logo from "../../assets/SEE MY DEV STACK (1).svg";

import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";

export const MobileNavbar = () => {
  const [visible, isVisible] = useState(false);

  const dispatch = useDispatch;
  return (
    <MobileNavbarContainer>
      <AnimatePresence>
        {visible && <Modal isVisible={isVisible} visible={visible} />}
      </AnimatePresence>

      <Icon icon={faBars} onClick={(e) => isVisible(!visible)} />
    </MobileNavbarContainer>
  );
};
