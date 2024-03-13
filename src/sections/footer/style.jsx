import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: ${(props) => props.theme.space._100};
  font-size: 130%;
`;

export const Message = styled.h3`
  color: ${(props) => props.theme.colors.c3};
  font-weight: ${(props) => props.theme.font_weight.normal};
  & > span {
    white-space: nowrap;
  }
`;

export const BoldText = styled.span`
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.font_weight.bold};
`;
