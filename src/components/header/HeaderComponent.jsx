import React from "react";
import {
  CloseSvg,
  Header,
  MenuHamburgerSvg,
  MenuItem,
  MenuLink,
  MenuList,
  Navi,
  PortifolioText,
} from "./styles";

const HeaderComponent = ({ isMobile }) => {
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false);

  React.useEffect(() => {
    if (mobileMenuActive) {
      document.body.style.overflow = "hidden";
    } else if (!mobileMenuActive) {
      document.body.style.overflow = "visible";
    }
  }, [mobileMenuActive]);

  return (
    <Header>
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
            <MenuLink
              className="body-1"
              href="#about"
              onClick={() => isMobile && setMobileMenuActive(false)}
            >
              Sobre Mim
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              className="body-1"
              href="#projects"
              onClick={() => isMobile && setMobileMenuActive(false)}
            >
              Projeto
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              className="body-1"
              href="#contact"
              onClick={() => isMobile && setMobileMenuActive(false)}
            >
              Contato
            </MenuLink>
          </MenuItem>
        </MenuList>
      </Navi>
    </Header>
  );
};

export default HeaderComponent;
