import styled from "styled-components";
import aboutPhoto from "../../assets/about-section-photo.png";

export const AboutSection = styled.section`
  grid-area: about;
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.space._24};

  @media screen and (min-width: 992px) and (min-height: 450px) and (max-height: 1000px) {
    background-image: url(${aboutPhoto});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 40% auto;
  }

  @media screen and (min-width: 1300px) {
    background-size: auto 100vh;
  }
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-areas:
    "title"
    "subTitle"
    "text"
    "button";

  @media screen and (min-width: 992px) and (min-height: 450px) and (max-height: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "title title"
      ". subTitle"
      ". text"
      ". button";
  }
`;

export const TitleContainer = styled.div`
  grid-area: title;
`;

export const AboutSubTitle = styled.h2`
  grid-area: subTitle;
  margin-top: ${(props) => props.theme.space._60};
  padding: ${(props) => props.theme.space._4};
`;

export const AboutTextContainer = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space._20};
  margin-top: ${(props) => props.theme.space._40};
`;

export const DownloadCVContainer = styled.div`
  grid-area: button;
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.space._40};
`;
