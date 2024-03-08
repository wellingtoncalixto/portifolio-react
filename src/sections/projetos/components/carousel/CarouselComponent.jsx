import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDot from "../custom_dot/CustomDotComponent";

import CardComponent from "../../../../components/card/CardComponent";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 465 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselComponent = ({ cardsData }) => {
  if (cardsData.lenght <= 0) return null;
  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      customDot={<CustomDot carouselItems={cardsData} />}
      renderDotsOutside={true}
      showDots={true}
      dotListClass="dot-class"
    >
      {cardsData.map((cardData, index) => (
        <CardComponent key={index} cardData={cardData} />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
