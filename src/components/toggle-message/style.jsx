import styled, { css } from "styled-components";

export const Toggle = styled.div`
  display: block;
  opacity: 1;
  position: fixed;
  bottom: 50%;
  left: calc(50vw - (${(props) => props.$elementWidth} / 2));
  width: max-content;
  padding: ${(props) => props.theme.space._12}
    ${(props) => props.theme.space._24};
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  animation: fade-in-fade-out 3s;
  font-size: 200%;

  ${(props) =>
    props.$success
      ? css`
          background: #03aa65;
        `
      : css`
          background: #af0404;
        `}

  @keyframes fade-in-fade-out {
    0% {
      display: block;
      opacity: 0;
    }
    50%,
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }
`;
