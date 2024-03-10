import styled from "styled-components";

export const Footer = styled.footer`
  width: 100vw;
  height: ${({ theme }) => theme.space.global_space_100};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.h3`
  font-weight: 400;
  color: var ${({ theme }) => theme.cores.black};
`;

export const BoldText = styled.span`
  font-weight: ${({ theme }) => theme.font_weight.bold};
`;
