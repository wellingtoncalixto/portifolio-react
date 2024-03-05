import styled from "styled-components";
import introducaoPhoto from "../../assets/photo-introducao.png";
export const IntroducaoSection = styled.section`
  & > .content {
    justify-content: center;
    padding-top: 0px;
  }

  @media screen and (min-width: 1200px) {
    & {
      background-image: url(${introducaoPhoto});
      background-repeat: no-repeat;
      background-position: right top;
    }
    & > .content {
      align-items: flex-start;
      justify-content: center;
    }
  }
`;

export const Apresentation = styled.div`
  text-align: center;

  @media screen and (min-width: 1200px) {
    & {
      text-align: start;
      max-width: 650px;
    }
  }
`;

export const ApresentationTitle = styled.h1``;

export const BlueText = styled.span`
  color: ${(props) => props.theme.cores.b7};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.space.global_space_20};
  margin-top: ${(props) => props.theme.space.global_space_32};
`;

export const SocialMidiasContainer = styled.div`
  margin-top: ${(props) => props.theme.space.global_space_60};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.space.global_space_12};
`;
