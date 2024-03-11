import React from "react";
import {
  AboutContent,
  AboutSection,
  AboutSubTitle,
  AboutText,
  DownloadCVContainer,
} from "./style";
import ButtonComponent from "../../components/button/ButtonComponent";
import cv from "../../files/wellington_calixto.pdf";

const Sobre = () => {
  return (
    <AboutSection id="about" className="section">
      <div className="content">
        <div className="title-container">
          <h1 className="heading-1 title">Sobre Mim</h1>
        </div>
        <AboutContent>
          <AboutSubTitle className="sub-title heading-3-kanit">
            Fico feliz que queira saber um pouco mais sobre mim e meu trabalho.
          </AboutSubTitle>
          <AboutText className="body-1">
            Meu nome é Wellington Calixto, e sou um profissional da área de
            desenvolvimento Web, focado em Front End, com uma trajetória
            profissional de 3 anos. Com formação em Tecnologia em Análise e
            Desenvolvimento de Sistemas e um diploma técnico em Informática para
            a Internet, venho consolidando uma base sólida de conhecimentos e
            habilidades ao longo da minha jornada.
          </AboutText>
          <AboutText className="body-1">
            Ao longo da minha carreira, dediquei-me ao aprimoramento contínuo,
            especializando-me em linguagens e tecnologias fundamentais como
            HTML5, CSS3, SASS, JavaScript e Typescript. Minha experiência se
            estende a trabalhos com frameworks em alta no mercado como React e
            Angular, onde pude contribuir para o desenvolvimento de aplicações
            web eficientes e modernas.
          </AboutText>
          <AboutText className="body-1">
            Atualmente, estou concentrando meus esforços em fortalecer ainda
            mais minhas bases no desenvolvimento web, buscando constantemente
            inovações e atualizações nessas tecnologias dinâmicas.
          </AboutText>
        </AboutContent>
        <DownloadCVContainer>
          <ButtonComponent
            buttonType="linkButton"
            $buttonStyle={"primary"}
            text="Download CV"
            className="cta-medium"
            href={cv}
            download="Wellington Calixto - CV"
          />
        </DownloadCVContainer>
      </div>
    </AboutSection>
  );
};

export default Sobre;
