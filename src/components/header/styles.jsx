import styled, { css } from "styled-components";
import MenuHamburgerIconSvg from "../../assets/menu-hamburguer-icon.svg?react";
import CloseIconSvg from "../../assets/close-icon.svg?react";

export const MenuHamburgerSvg = styled(MenuHamburgerIconSvg)`
  display: ${(props) => (props.$mobileMenuActive ? "none" : "block")};
`;

export const CloseSvg = styled(CloseIconSvg)`
  position: flex;
  z-index: 3;
`;

export const HeaderComponent = styled.header`
  position: absolute;
  width: 100vw;
  height: auto;

  padding: 0 ${({ theme }) => theme.space._24};
  margin: ${({ theme }) => theme.space._24} 0;
`;

export const Navi = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: auto;

  @media screen and (min-width: 1400px) {
    margin: 0 auto;
    max-width: 1300px;
  }
`;

export const PortifolioText = styled.h1`
  color: ${({ theme }) => theme.colors.b7};
`;

export const MenuList = styled.ul`
  display: ${(props) =>
    props.$isMobile ? (props.$mobileMenuActive ? "flex" : "none") : "flex"};
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(00, 00, 00, 0.6);
  flex-direction: column;
  align-items: center;
  top: -1.5rem;
  left: 0;
  z-index: 2;
  padding: ${({ theme }) => theme.space._24};
  padding-top: calc(${({ theme }) => theme.space._60} + 2.5rem);

  @media screen and (min-width: 768px) {
    position: initial;
    height: auto;
    z-index: 0;
    flex-direction: row;
    justify-content: flex-end;
    background-color: transparent;
    padding: 0;
    gap: ${({ theme }) => theme.space._20};
  }
`;

export const MenuItem = styled.li`
  width: 100vw;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    width: max-content;
    gap: ${({ theme }) => theme.space._20};
    transition: none;

    &:hover {
      background-color: initial;
    }
  }
`;

export const MenuLink = styled.a`
  width: 100%;
  text-align: center;
  text-decoration: none;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  border-bottom: ${({ theme }) => theme.space._2} solid white;
  padding: ${({ theme }) => theme.space._8} 0;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }

  @media screen and (min-width: 768px) {
    border: 0;
    width: max-content;
    color: ${(props) => props.theme.colors.black};
    padding: 0;

    &:hover {
      color: ${(props) => props.theme.colors.c10};
    }
  }
`;
