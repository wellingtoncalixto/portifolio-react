import React from "react";
import {
  CloseSvg,
  HeaderComponent,
  MenuHamburgerSvg,
  MenuItem,
  MenuLink,
  MenuList,
  Navi,
  PortifolioText,
} from "./styles";

const Header = ({ mobileVisibility }) => {
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false);
  return (
    <HeaderComponent>
      <Navi>
        <PortifolioText className="heading-1">Portifolio</PortifolioText>
        <MenuHamburgerSvg
          onClick={() => setMobileMenuActive(true)}
          $mobileVisibility={mobileVisibility}
          $mobileMenuActive={mobileMenuActive}
        />
        <MenuList $mobileMenuActive={mobileMenuActive}>
          <MenuItem>
            <CloseSvg
              onClick={() => setMobileMenuActive(false)}
              $mobileVisibility={mobileVisibility}
              $mobileMenuActive={mobileMenuActive}
            />
          </MenuItem>
          <MenuItem>
            <MenuLink className="body-1" href="#about">
              Sobre Mim
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink className="body-1" href="#projects">
              Projeto
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink className="body-1" href="#contact">
              Contato
            </MenuLink>
          </MenuItem>
        </MenuList>
      </Navi>
    </HeaderComponent>
  );
};

export default Header;
