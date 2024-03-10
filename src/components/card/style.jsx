import styled, { css } from "styled-components";

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  background-color: ${(props) => props.theme.cores.white};
  border-radius: 12px;

  ${(props) =>
    props.$mobileVisibility === false &&
    css`
      max-width: none;
      width: 100%;
    `}
`;

export const ProjectImgContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px;
  max-height: 200px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  ${(props) =>
    props.$mobileVisibility === false &&
    css`
      height: 150px;
      max-width: 100%;
      object-fit: cover;
    `}
`;

export const ProjectInfoContainer = styled.div`
  display: block;
  box-sizing: border-box;
  padding: ${(props) => props.theme.space.global_space_12};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProjectDescription = styled.p`
  margin: ${(props) => props.theme.space.global_space_12} 0px;
`;

export const ProjectTagsContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space.global_space_08};
  margin-bottom: ${(props) => props.theme.space.global_space_20};
`;

export const Tag = styled.p`
  font-weight: ${(props) => props.theme.font_weight.bold};
  text-decoration: none;
  border-radius: ${(props) => props.theme.space.global_space_04};
  padding: ${(props) => props.theme.space.global_space_04};
  background-color: ${(props) => props.theme.cores.b6};
  color: ${(props) => props.theme.cores.white};
`;

export const CardButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  & > a {
    display: inline-block;
  }
`;
