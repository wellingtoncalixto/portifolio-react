import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const CarouselContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  position: relative;
  grid-template-rows: 1fr max-content;
  gap: ${(props) => props.theme.space._24};
  padding: ${(props) => props.theme.space._12} 0;

  .slide-class {
    height: 100%;
    padding-top: ${(props) => props.theme.space._60};
  }

  .item-class {
    display: flex;
    justify-content: center;
    height: 100%;
  }

  .dot-class {
    position: relative;
  }

  @media screen and (max-height: 500px) {
    height: 100%;
  }
`;

export const MuiltCarousel = styled(Carousel)`
  height: 100%;
`;
