import React from "react";
import {
  Card,
  CardButtonContainer,
  CardContent,
  ProjectDescription,
  ProjectImg,
  ProjectImgContainer,
  ProjectInfoContainer,
  ProjectTagsContainer,
  Tag,
} from "./style";
import ButtonComponent from "../button/ButtonComponent";
import IconLinkComponent from "../icon-link/IconLinkComponent";

const CardComponent = ({ cardData, $mobileVisibility = true }) => {
  const { img, title, description, tags, buttons } = cardData;

  return (
    <Card className="card" $mobileVisibility={$mobileVisibility}>
      <CardContent className="card-content" $mobileVisibility={$mobileVisibility}>
        <ProjectImgContainer className="project-image-container">
          <ProjectImg
            src={img}
            alt=""
            draggable="false"
            $mobileVisibility={$mobileVisibility}
          />
        </ProjectImgContainer>
        <ProjectInfoContainer className="project-info-container">
          <h3 className="body-1">{title}</h3>
          <ProjectDescription className="project-description body-2">
            {description}
          </ProjectDescription>
          <ProjectTagsContainer className="tags-container">
            {tags.map((tag, index) => (
              <Tag key={index} className="tag small-label-captalize">
                {tag}
              </Tag>
            ))}
          </ProjectTagsContainer>
          <CardButtonContainer className="buttons-container">
            {buttons.length <= 0 && null}
            {buttons.map((button, index) =>
              button.component === "buttonComponent" ? (
                <ButtonComponent
                  className="cta-medium"
                  key={index}
                  buttonType={button.type}
                  text={button.text}
                  $buttonStyle={"primary"}
                />
              ) : (
                <IconLinkComponent
                  key={index}
                  link="https://github.com/wellingtoncalixto"
                  height={"40px"}
                  width={"40px"}
                  icon="git"
                />
              )
            )}
          </CardButtonContainer>
        </ProjectInfoContainer>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
