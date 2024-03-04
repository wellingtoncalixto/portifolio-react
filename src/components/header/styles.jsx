import styled, { css } from "styled-components";

export const HeaderComponent = styled.header`
  position: absolute;
  width: 100%;
  margin: ${(props) => props.theme.space.global_space_24} auto;
  display: flex;
  justify-content: space-between;
  z-index: 2;
`;

export const Navi = styled.nav`
  padding: 0 ${(props) => props.theme.space.global_space_24};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1400px) {
    max-width: 1300px;
    margin: 0 auto;
  }
`;

export const PortifolioText = styled.h1`
  color: ${(props) => props.theme.cores.b7};
`;

export const MenuList = styled.ul`
  ${({ $mobileMenuActive, theme }) =>
    $mobileMenuActive
      ? css`
          position: absolute;
          width: 100%;
          height: 100vh;
          background-color: rgba(00, 00, 00, 0.6);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: ${theme.space.global_space_20};
          top: -1.5rem;
          left: 0;
          bottom: 0;
          z-index: 2;
        `
      : css`
          display: none;
        `}

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-top: 0px;
    gap: var(--global-space-20);
  }
`;

export const MenuItem = styled.li`
  padding: 0px ${(props) => props.theme.space.global_space_24};

  &:first-of-type {
    align-self: flex-end;
    margin-top: ${(props) => props.theme.space.global_space_24};
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.cores.white};

  @media screen and (min-width: 768px) {
    color: ${(props) => props.theme.cores.black};
  }
`;
