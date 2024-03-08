import styled, { css } from "styled-components";

const buttonStyles = ({ $buttonStyle, theme }) => {
  return css`
    cursor: pointer;
    border-radius: ${theme.space.global_space_12};
    padding: ${theme.space.global_space_12} ${theme.space.global_space_24};
    text-decoration: none;
    font-weight: ${theme.font_weight.bold};

    border: 2px solid
      ${($buttonStyle === "primary" && theme.cores.b8) ||
      ($buttonStyle === "secondary" && theme.cores.b9)};
    background-color: ${($buttonStyle === "primary" && theme.cores.b8) ||
    ($buttonStyle === "secondary" && "transparent")};
    color: ${($buttonStyle === "primary" && theme.cores.white) ||
    ($buttonStyle === "secondary" && theme.cores.b9)};

    ${$buttonStyle === "primary" &&
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
