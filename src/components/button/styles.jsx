import styled, { css } from "styled-components";

export const Button = styled.a`
  border-radius: ${(props) => props.theme.space.global_space_12};
  padding: ${(props) => props.theme.space.global_space_12}
    ${(props) => props.theme.space.global_space_24};
  text-decoration: none;
  font-weight: ${(props) => props.theme.font_weight.bold};

  ${(props) =>
    props.type === "primary"
      ? css`
          border: 2px solid ${props.theme.cores.b8};
          background-color: ${props.theme.cores.b8};
          color: ${props.theme.cores.white};

          &:hover {
            background-image: linear-gradient(
              ${props.theme.cores.b8},
              ${props.theme.cores.b6}
            );
          }
        `
      : css`
          border: 2px solid ${props.theme.cores.b9};
          background-color: transparent;
          color: ${props.theme.cores.b9};
        `}
`;
