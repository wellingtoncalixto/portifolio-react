import styled, { css } from "styled-components";

export const Card = styled.div`
  width: 95%;
  display: grid;
  flex-direction: column;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  font-size: 110%;
  border-radius: 10px;
  grid-template-rows: 1fr 1fr;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 1fr;
  }
`;

export const CardImgContainer = styled.div`
  height: 100%;
`;

export const CardImg = styled.img`
  height: 100px;
  width: 100%;
  min-height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    min-height: 100%;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 0px;
  }
`;

export const CardInfoContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: ${(props) => props.theme.space._20};
  justify-content: center;
  width: 90%;
  padding: ${(props) => props.theme.space._24};
`;

export const CardDescription = styled.p``;

export const CardTagsContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space._8};
  font-size: 110%;
`;

export const Tag = styled.p`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.b6};
  padding: ${(props) => props.theme.space._12};
  border-radius: 4px;
  font-weight: ${(props) => props.theme.font_weight.bold};
`;

export const CardButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space._8};
`;
