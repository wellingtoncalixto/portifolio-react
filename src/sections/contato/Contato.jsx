import React from "react";
import IconLinkComponent from "../../components/icon-link/IconLinkComponent";
import {
  ContactContent,
  ContatoSection,
  Form,
  FormContainer,
  LineDecoration,
  MediasContainer,
  SubTitle,
  SubmitButton,
  TitleContainer,
} from "./style";
import Input from "./components/input/Input";
import useForm from "../../custom_hooks/useForm";
import TextArea from "./components/textarea/TextArea";
import useFetch from "../../custom_hooks/useFetch";

const Contato = () => {
  const nome = useForm();
  const email = useForm("email");
  const mensagem = useForm("mensagem");

  const { request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    await request(
      "https://formsubmit.co/ajax/bb1d10a093690e50775494d84c89b04a",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome.value,
          email: email.value,
          mensagem: mensagem.value,
        }),
      }
    );
    nome.setValue("");
    email.setValue("");
    mensagem.setValue("");
  }

  function disableButton() {
    return !nome.value ||
      nome.error ||
      !email.value ||
      email.error ||
      !mensagem.value ||
      mensagem.error
      ? true
      : false;
  }

  return (
    <ContatoSection id="contact" className="section">
      <ContactContent className="content">
        <TitleContainer className="title-container">
          <h1 className="heading-1 title">Contato</h1>
        </TitleContainer>
        <SubTitle className="sub-title heading-3-kanit">
          Se gostou do meu trabalho e quer entrar em contato para uma
          oportunidade ou apenas para me dar um Oi, você pode me mandar uma
          mensagem preenchendo os campos abaixo ou entrar em contato pelas
          minhas redes sociais.
        </SubTitle>
        <LineDecoration />
        <FormContainer className="form-container">
          <Form onSubmit={handleSubmit}>
            <Input
              label="Nome"
              id="nome"
              type="text"
              {...nome}
              style={{ gridArea: "nome" }}
            />
            <Input
              label="E-mail"
              id="email"
              type="email"
              {...email}
              style={{ gridArea: "email" }}
            />
            <TextArea
              label="Mensagem"
              id="mensagem"
              type="text"
              {...mensagem}
              style={{ gridArea: "mensagem" }}
            />
            <SubmitButton
              disabled={disableButton()}
              className="cta-medium"
              buttonType={"normalButton"}
              text={"Enviar"}
              type="submit"
              buttonStyle={"primary"}
            />
          </Form>
          <LineDecoration />
          <MediasContainer className="icon-container">
            <IconLinkComponent
              href="https://github.com/wellingtoncalixto"
              target="_blank"
              rel="noopener noreferrer"
              icon="git"
              width="2.5rem"
              height="2.5rem"
            />
            <IconLinkComponent
              href="https://www.linkedin.com/in/wellingtoncalixto/"
              target="_blank"
              rel="noopener noreferrer"
              icon="linkedin"
              width="2.5rem"
              height="2.5rem"
            />
            <IconLinkComponent
              href="https://wa.me/5519984268415"
              target="_blank"
              rel="noopener noreferrer"
              icon="whatsapp"
              width="2.5rem"
              height="2.5rem"
            />
          </MediasContainer>
        </FormContainer>
      </ContactContent>
    </ContatoSection>
  );
};

export default Contato;
