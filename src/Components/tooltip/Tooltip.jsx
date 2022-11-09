import React from "react";
import { useState } from "react";
import {
  CenterContainer,
  TooltipBox,
  TooltipWraper,
  ToooltipTarget,
} from "./tooltip-styled";

import { useRef } from "react";

export const Tooltip = ({ text, children, position }) => {
  const [ishovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef(null);
  const showTooltip = ishovered || isFocused;
  const handleClick = (e) => {
    e.preventeDefault();
    if (targetRef.current) {
      targetRef.current.blur();
    }
  };
  return (
    <TooltipWraper>
      <ToooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={handleClick}
        ref={targetRef}
        showOnFocus={isFocused}
      >
        {children}
      </ToooltipTarget>
      {showTooltip && (
        <CenterContainer position="bottom">
          <TooltipBox position="bottom">{text}</TooltipBox>
        </CenterContainer>
      )}
    </TooltipWraper>
  );
};
