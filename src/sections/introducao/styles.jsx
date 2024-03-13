import styled from "styled-components";
import introducaoPhoto from "../../assets/photo-introducao.png";

export const IntroducaoSection = styled.section`
  grid-area: introducao;
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space._24};
  padding-top: calc(
    ${(props) => props.$headerHeight} + 2 * ${(props) => props.theme.space._24}
  );

  & > .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  @media screen and (min-width: 992px) and (min-height: 450px) and (max-height: 1000px) {
    background-image: url(${introducaoPhoto});
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 50vw auto;

    & > .content {
      align-items: flex-start;
    }
  }
`;

export const Apresentation = styled.div`
  text-align: center;

  @media screen and (min-width: 992px) and (min-height: 450px) and (max-height: 1000px) {
    margin-top: 0;
    text-align: start;
    width: max-content;
  }
`;

export const ApresentationTitle = styled.h1`
  @media screen and (min-width: 769px) {
    white-space: nowrap;
  }
`;

export const BlueText = styled.h1`
  color: ${(props) => props.theme.colors.b7};

  @media screen and (min-width: 769px) {
    white-space: nowrap;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space._12};
  margin-top: ${(props) => props.theme.space._24};
`;

export const SocialMidiasContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space._12};
  margin-top: ${(props) => props.theme.space._20};
`;
