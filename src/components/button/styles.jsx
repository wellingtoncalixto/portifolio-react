import styled, { css } from "styled-components";

const communButtonStyles = ({ theme }) => {
  const padrao = css`
    text-decoration: none;
    width: max-content;
    padding: ${theme.space._8} ${theme.space._16};
    font-weight: ${theme.font_weight.bold};
    border-radius: ${theme.space._12};

    @media screen and (min-width: 768px) {
      padding: ${theme.space._12} ${theme.space._24};
    }
  `;
  return padrao;
};

const buttonStyles = ({ $buttonStyle, theme }) => {
  const primary = css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.b8};
    border: ${theme.space._4} solid ${theme.colors.b8};

    &:hover {
      background: linear-gradient(${theme.colors.b8}, ${theme.colors.b7});
    }
  `;

  const secondary = css`
    background: transparent;
    color: ${theme.colors.b8};
    border: ${theme.space._4} solid ${theme.colors.b8};

    &:hover {
      color: ${theme.colors.b7};
      border-color: ${theme.colors.b7};
    }
  `;
  return (
    ($buttonStyle === "primary" && primary) ||
    ($buttonStyle === "secondary" && secondary)
  );
};

export const LinkButton = styled.a`
  ${(props) => communButtonStyles(props)}
  ${(props) => buttonStyles(props)}
`;

export const NormalButton = styled.button`
  ${(props) => communButtonStyles(props)}
  ${(props) => buttonStyles(props)}
`;
