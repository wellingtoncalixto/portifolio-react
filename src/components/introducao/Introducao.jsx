import React from "react";
import {
  Apresentation,
  ApresentationTitle,
  BlueText,
  ButtonsContainer,
  IntroducaoSection,
  SocialMidiasContainer,
} from "./styles";

import IconLinkComponent from "../icon-link/IconLinkComponent";
import ButtonComponent from "../button/ButtonComponent";

const Introducao = () => {
  return (
    <IntroducaoSection className="section">
      <div className="content">
        <Apresentation>
          <ApresentationTitle className="display-1">
            Olá, meu nome é <BlueText>Wellington Calixto</BlueText>
          </ApresentationTitle>
          <h3 className="heading-3-jetbrains">
            Sou um Desenvolvedor Web Front-End
          </h3>
        </Apresentation>
        <ButtonsContainer>
          <ButtonComponent
            buttonType="linkButton"
            secondary={true}
            text="Projetos"
            className="cta-medium"
            href="#projects"
          />

          <ButtonComponent
            buttonType="linkButton"
            primary={true}
            text="Contate-me"
            className="cta-medium"
            href="#contact"
          />
        </ButtonsContainer>
        <SocialMidiasContainer>
          <p className="body-1">Redes Sociais:</p>
          <IconLinkComponent
            link="https://github.com/wellingtoncalixto"
            height={"30px"}
            width={"30px"}
            icon="git"
          />
          <IconLinkComponent
            link="https://www.linkedin.com/in/wellingtoncalixto/"
            height={"30px"}
            width={"30px"}
            icon="linkedin"
          />
        </SocialMidiasContainer>
      </div>
    </IntroducaoSection>
  );
};

export default Introducao;
