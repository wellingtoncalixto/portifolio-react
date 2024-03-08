import styled from "styled-components";
import aboutPhoto from "../../assets/about-section-photo.png";

export const AboutSection = styled.section`
  background-color: ${(props) => props.theme.cores.white};

  @media screen and (min-width: 1200px) {
    background-image: url(${aboutPhoto});
    background-repeat: no-repeat;
    background-position-x: -120px;
  }
`;

export const AboutContent = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, max-content);

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AboutSubTitle = styled.h2`
  width: 100%;
  max-width: 650px;
  text-align: center;
  margin-top: ${(props) => props.theme.space.global_space_60};
  color: ${(props) => props.theme.cores.c4};
  position: relative;
  border-left: 4px solid ${(props) => props.theme.cores.b5};
  border-right: 4px solid ${(props) => props.theme.cores.b5};

  @media screen and (min-width: 1200px) {
    grid-column: 2;
  }
`;

export const AboutText = styled.p`
  max-width: 650px;
  margin-top: ${(props) => props.theme.space.global_space_20};

  &:first-of-type {
    margin-top: ${(props) => props.theme.space.global_space_32};
  }

  @media screen and (min-width: 1200px) {
    grid-column: 2;
  }
`;

export const DownloadCVContainer = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1200px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;

    & > a {
      width: max-content;
      grid-column: 2;
    }
  }
`;
