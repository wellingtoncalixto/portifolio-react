import React from "react";

import projetoImg from "../../assets/card-image.png";

import { CardsContainer, ProjectsSection, CardList } from "./styled";
import CarouselComponent from "./components/carousel/CarouselComponent";
import CardComponent from "../../components/card/CardComponent";

const cardsData = [
  {
    img: projetoImg,
    title: "Portifolio - Leticia Moraes Fotografia 1",
    description:
      "Criação do UX e Desenvolvimento do portifolio da fotografa Leticia Moraes com o objetivo de mostrar seu trabalho.",
    tags: ["HTML5", "CSS"],
    buttons: [
      {
        component: "buttonComponent",
        type: "linkButton",
        text: "Visitar Site",
        icone: "",
        href: "",
      },
      {
        component: "iconLink",
        type: "",
        text: "",
        icone: "git",
        href: "",
      },
    ],
  },
  {
    img: projetoImg,
    title: "Portifolio - Leticia Moraes Fotografia 2",
    description:
      "Criação do UX e Desenvolvimento do portifolio da fotografa Leticia Moraes com o objetivo de mostrar seu trabalho.",
    tags: ["HTML5", "CSS"],
    buttons: [
      {
        component: "buttonComponent",
        type: "linkButton",
        text: "Visitar Site",
        icone: "",
        href: "",
      },
      {
        component: "iconLink",
        type: "",
        text: "",
        icone: "git",
        href: "",
      },
    ],
  },
  {
    img: projetoImg,
    title: "Portifolio - Leticia Moraes Fotografia 3",
    description:
      "Criação do UX e Desenvolvimento do portifolio da fotografa Leticia Moraes com o objetivo de mostrar seu trabalho.",
    tags: ["HTML5", "CSS"],
    buttons: [
      {
        component: "buttonComponent",
        type: "linkButton",
        text: "Visitar Site",
        icone: "",
        href: "",
      },
      {
        component: "iconLink",
        type: "",
        text: "",
        icone: "git",
        href: "",
      },
    ],
  },
];

const Projetos = ({ isMobile }) => {
  return (
    <ProjectsSection id="projects" className="section" $isMobile={isMobile}>
      <div className="content">
        <div className="title-container">
          <h1 className="heading-1 title">Projetos</h1>
        </div>

        {isMobile && <CarouselComponent cardsData={cardsData} />}
        {!isMobile && (
          <CardsContainer>
            <CardList>
              {cardsData.map((cardData, index) => (
                <CardComponent
                  key={index}
                  cardData={cardData}
                  isMobile={isMobile}
                />
              ))}
            </CardList>
          </CardsContainer>
        )}
      </div>
    </ProjectsSection>
  );
};

export default Projetos;
