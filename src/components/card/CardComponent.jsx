import React from "react";
import {
  Card,
  CardButtonContainer,
  CardDescription,
  CardImg,
  CardImgContainer,
  CardInfoContainer,
  CardTagsContainer,
  Tag,
} from "./style";
import ButtonComponent from "../button/ButtonComponent";
import IconLinkComponent from "../icon-link/IconLinkComponent";

const CardComponent = ({ cardData, isMobile = true }) => {
  const { img, title, description, tags, buttons } = cardData;

  return (
    <Card className="card" $isMobile={isMobile}>
      <CardImgContainer
        className="project-image-container"
        $isMobile={isMobile}
      >
        <CardImg src={img} alt="" draggable="false" $isMobile={isMobile} />
      </CardImgContainer>
      <CardInfoContainer $isMobile={isMobile}>
        <h3 className="body-1">{title}</h3>
        <CardDescription className=" body-2">{description}</CardDescription>
        <CardTagsContainer>
          {tags.map((tag, index) => (
            <Tag key={index} className="small-label-captalize">
              {tag}
            </Tag>
          ))}
        </CardTagsContainer>
        <CardButtonContainer>
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
                height={"2.5rem"}
                width={"2.5rem"}
                icon="git"
              />
            )
          )}
        </CardButtonContainer>
      </CardInfoContainer>
    </Card>
  );
};

export default CardComponent;
