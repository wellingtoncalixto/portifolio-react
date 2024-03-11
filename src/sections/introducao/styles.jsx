import styled from "styled-components";
import introducaoPhoto from "../../assets/photo-introducao.png";
import PropTypes from "prop-types";

export const IntroducaoSection = styled.section`
  display: flex;
  align-items: center;
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

  @media screen and (min-width: 769px) {
    background-image: url(${introducaoPhoto});
    background-repeat: no-repeat;
    background-position: right top;
    background-size: auto 50vh;
  }

  @media screen and (min-width: 992px) {
    background-size: 50vw auto;
    & > .content {
      align-items: flex-start;
    }
  }
`;

export const Apresentation = styled.div`
  text-align: center;

  @media screen and (min-width: 769px) {
    margin-top: ${(props) => props.theme.space._200};
  }

  @media screen and (min-width: 992px) {
    margin-top: 0;
    text-align: start;
    max-width: 50%;
  }
`;

export const ApresentationTitle = styled.h1``;

export const BlueText = styled.span`
  color: ${(props) => props.theme.colors.b7};
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
