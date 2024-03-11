import styled, { css } from "styled-components";
import GithubLogoSvg from "../../assets/github-logo.svg?react";
import LinkedinLogoSvg from "../../assets/linkedin-logo.svg?react";
import WhatsappLogoSvg from "../../assets/whatsapp-logo.svg?react";

const svgStyles = ({ height, width, theme }) => {
  return css`
    height: ${height || "initial"};
    width: ${width || "initial"};

    &:hover {
      & > path {
        fill: ${theme.colors.b7};
      }
    }
  `;
};

export const GithubLink = styled(GithubLogoSvg)`
  ${(props) => svgStyles(props)}
`;

export const LinkedinLink = styled(LinkedinLogoSvg)`
  ${(props) => svgStyles(props)}
`;

export const WhatsappLink = styled(WhatsappLogoSvg)`
  ${(props) => svgStyles(props)}
`;
