import React from "react";
import {
  HeaderComponent,
  MenuItem,
  MenuLink,
  MenuList,
  Navi,
  PortifolioText,
} from "./styles";
import MenuHamburgerSvg from "../svg-components/MenuHamburgerSvg";
import CloseIconSvg from "../svg-components/CloseIconSvg";

const Header = ({ mobileVisibility }) => {
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false);
  return (
    <HeaderComponent>
      <Navi>
        <PortifolioText className="heading-1">Portifolio</PortifolioText>
        <MenuHamburgerSvg
          onClick={() => setMobileMenuActive(true)}
          style={{
            cursor: "pointer",
            display: mobileVisibility && !mobileMenuActive ? "block" : "none",
          }}
        />
        <MenuList $mobileMenuActive={mobileMenuActive}>
          <MenuItem>
            <CloseIconSvg
              onClick={() => setMobileMenuActive(false)}
              style={{
                cursor: "pointer",
                display:
                  mobileVisibility && mobileMenuActive ? "block" : "none",
              }}
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
