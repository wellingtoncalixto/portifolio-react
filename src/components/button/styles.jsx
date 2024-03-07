import styled, { css } from "styled-components";

const buttonStyles = ({ primary, secondary, theme }) => {
  return css`
    border-radius: ${theme.space.global_space_12};
    padding: ${theme.space.global_space_12} ${theme.space.global_space_24};
    text-decoration: none;
    font-weight: ${theme.font_weight.bold};

    border: 2px solid
      ${(primary && theme.cores.b8) || (secondary && theme.cores.b9)};
    background-color: ${(primary && theme.cores.b8) ||
    (secondary && "transparent")};
    color: ${(primary && theme.cores.white) || (secondary && theme.cores.b9)};

    ${primary &&
    css`
      &:hover {
        background-image: linear-gradient(${theme.cores.b8}, ${theme.cores.b6});
      }
    `}
  `;
};

export const LinkButton = styled.a`
  ${(props) => buttonStyles(props)}
`;

export const NormalButton = styled.button`
  ${(props) => buttonStyles(props)}
`;
