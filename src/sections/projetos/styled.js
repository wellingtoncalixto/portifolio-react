import styled, { css } from "styled-components";

export const ProjectsSection = styled.section`
  grid-area: projects;
  padding: ${(props) => props.theme.space._24};
`;

export const ProjectsContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  @media screen and (min-width: 992px) and (min-height: 750px) {
  }
`;

export const CardList = styled.ul`
  display: grid;
  justify-items: center;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: ${(props) => props.theme.space._24};
  padding-top: ${(props) => props.theme.space._60};
`;
