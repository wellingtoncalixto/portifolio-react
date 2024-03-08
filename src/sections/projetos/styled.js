import styled, { css } from "styled-components";

export const ProjectsSection = styled.section`
  & > .content {
    display: block;
    overflow: hidden;
  }
`;

export const CardsContainer = styled.div`
  margin-top: ${(props) => props.theme.space.global_space_60};
  position: relative;

  .dot-class {
    bottom: -40px;
  }

  ${(props) =>
    props.$mobileVisibility === false &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    `}
`;
