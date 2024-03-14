import styled from "styled-components";
import ButtonComponent from "../../components/button/ButtonComponent";

export const ContatoSection = styled.section`
  grid-area: contact;
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.space._24};
  font-size: 80%;
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-areas:
    "title"
    "subTitle"
    "form";
  grid-template-rows: max-content max-content 1fr;
`;

export const TitleContainer = styled.h1`
  grid-area: title;
`;
export const SubTitle = styled.h2`
  grid-area: subTitle;
`;

export const FormContainer = styled.div`
  grid-area: form;
  font-size: 150%;
  margin-top: ${(props) => props.theme.space._40};
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: grid;
  grid-template-areas:
    "nome"
    "email"
    "mensagem"
    "button";
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-areas:
      "nome email"
      "mensagem mensagem"
      "button button";
  }
`;

export const SubmitButton = styled(ButtonComponent)`
  grid-area: button;
  margin: 0 auto;
  width: 100%;
`;

export const MediasContainer = styled.div`
  grid-area: socialMedias;
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.space._12};
`;

export const LineDecoration = styled.span`
  grid-area: line;
  height: ${(props) => props.theme.space._4};
  width: 100%;
  background-color: ${(props) => props.theme.colors.c10};
  margin: ${(props) => props.theme.space._12} 0;
`;
