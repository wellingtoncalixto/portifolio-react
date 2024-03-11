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

const Header = ({ isMobile }) => {
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false);

  React.useEffect(() => {
    if (mobileMenuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "overflow";
    }
  }, [mobileMenuActive]);

  return (
    <HeaderComponent>
      <Navi>
        <PortifolioText className="heading-1">Portifolio</PortifolioText>
        {isMobile && mobileMenuActive === false && (
          <MenuHamburgerSvg
            onClick={() => setMobileMenuActive(true)}
            $isMobile={isMobile}
            $mobileMenuActive={mobileMenuActive}
          />
        )}

        {isMobile && mobileMenuActive === true && (
          <CloseSvg
            onClick={() => setMobileMenuActive(false)}
            $isMobile={isMobile}
            $mobileMenuActive={mobileMenuActive}
          />
        )}

        <MenuList $mobileMenuActive={mobileMenuActive} $isMobile={isMobile}>
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
