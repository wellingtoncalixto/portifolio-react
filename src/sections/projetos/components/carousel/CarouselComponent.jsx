import React from "react";
import "react-multi-carousel/lib/styles.css";
import CustomDot from "../custom_dot/CustomDotComponent";

import CardComponent from "../../../../components/card/CardComponent";
import { MuiltCarousel, CarouselContainer } from "./style";

const responsive = {
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

const CarouselComponent = ({ cardsData }) => {
  if (cardsData.lenght <= 0) return null;
  return (
    <CarouselContainer>
      <MuiltCarousel
        responsive={responsive}
        arrows={false}
        customDot={<CustomDot carouselItems={cardsData} />}
        renderDotsOutside={true}
        showDots={true}
        dotListClass="dot-class"
        sliderClass="slide-class"
        itemClass="item-class"
      >
        {cardsData.map((cardData, index) => (
          <CardComponent key={index} cardData={cardData} />
        ))}
      </MuiltCarousel>
    </CarouselContainer>
  );
};

export default CarouselComponent;
