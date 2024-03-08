import styled, { css } from "styled-components";

export const DotButton = styled.button`
  display: block;
  width: 21px;
  height: 21px;
  background: ${(props) => props.theme.cores.b9};
  border-radius: 50%;
  margin: 5px;
  border: none;

  ${(props) =>
    props.$active &&
    css`
      width: 51px;
      border-radius: 10px;
      position: relative;
      transition: 0.3s;

      &::before {
        content: "";
        position: absolute;
        display: block;
        transition: 0.3s;
        width: 41px;
        height: 7px;
        border-radius: 10px;
        background: ${(props) => props.theme.cores.b4};
        bottom: 7px;
        left: 5px;
        animation-name: show;
        animation-duration: 0.3s;
      }

      @keyframes show {
        from {
          width: 0px;
        }
        to {
          width: 41px;
        }
      }
    `}
`;
