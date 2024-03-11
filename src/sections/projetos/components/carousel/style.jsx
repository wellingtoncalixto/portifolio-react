import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const CarouselContainer = styled.div`
  margin-top: ${(props) => props.theme.space.global_space_60};
  position: relative;
  height: 100%;

  .dot-class {
    position: inherit;
    bottom: -1rem;
  }

  .slide-class {
    height: 100%;
    align-items: center;
  }

  .item-class {
    height: 100%;
    display: flex;
  }
`;

export const MuiltCarousel = styled(Carousel)`
  height: 80%;
`;
