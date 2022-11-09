import styled, { css } from "styled-components";

export const TooltipWraper = styled.div`
  display: inline-flex;
  position: relative;
`;

export const ToooltipTarget = styled.button`
  border: none;
  background: none;
  padding: 5px;
  margin: -1px;
  color: inherit;
  cursor: inherit;
  display: flex;
`;
export const CenterContainer = styled.div`
  width: 200px;
  position: absolute;
  margin-left: -100px;
  top: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: calc(100%+5px);
  pointer-events: none;

  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
            bottom:unset:
            top: calc(100%+5px);
        `;
      case "left":
        return css`
          margin-left: 0;
          width: 100%;
          left: unset;
          top: 50%;
          right: calc(100%+5px);
          width: max-content;
        `;
      case "rigth":
        return css`
          margin-left: 0;
          width: 100%;
          top: 50%;
          left: calc(100%+5px);
          width: max-content;
        `;
      default:
        return css`
          bottom: calc(100%+5px);
        `;
    }
  }}
`;
export const TooltipBox = styled.span`
  position: relative;
  background-color: #352c2d;
  color: #fff;
  font-family: "Arimo";
  text-align: center;
  border-radius: 5px;
  padding: 10px 8px;
  font-size: 1.4rem;

  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: #352c2d transparent transparent transparent;
    left: 47%;
    top: -12%;

    ${({ position }) => {
      switch (position) {
        case "bottom":
          return css`
            &:after {
              border-color: transparent transparent #${(props) =>
                  props.background} transparent;
              top: -15%;
              width: 1px;
              bottom: 5%;
              left: 55%;
            }
          `;
        case "left":
          return css`
            &:after {
              border-color: transparent transparent transparent #${(props) => props.background};
              left: 100%;
              top: calc(50% - 5px);
            }
          `;
        case "right":
          return css`
            &:after {
              border-color: transparent #${(props) => props.background} transparent
                transparent;
              right: 100%;
              left: unset;
              top: calc(50% - 5px);
            }
          `;
        default:
          return css``;
      }
    }}
  }
`;
