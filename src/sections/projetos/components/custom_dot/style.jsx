import styled, { css } from "styled-components";

export const DotButton = styled.button`
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  background: ${(props) => props.theme.colors.b9};
  border-radius: calc(1.25rem + 100%);
  margin: 0.25rem;
  border: none;

  ${(props) =>
    props.$active &&
    css`
      width: 3.1875rem;
      border-radius: 0.75rem;
      position: relative;
      transition: 0.3s;

      &::before {
        content: "";
        position: absolute;
        display: block;
        transition: 0.3s;
        width: 2.5625rem;
        height: 0.4375rem;
        border-radius: 10px;
        background: ${(props) => props.theme.colors.b4};
        bottom: 0.4375rem;
        left: 0.3125rem;
        animation-name: show;
        animation-duration: 0.3s;
      }

      @keyframes show {
        from {
          width: 0px;
        }
        to {
          width: 2.5625rem;
        }
      }
    `}
`;
