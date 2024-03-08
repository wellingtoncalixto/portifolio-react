import React from "react";
import Header from "./components/header/Header";
import GlobalStyle from "./styleds/GlobalStyle";
import Theme from "./styleds/Theme";
import Introducao from "./sections/introducao/Introducao";
import Sobre from "./sections/sobre-min/Sobre";
import Projetos from "./sections/projetos/Projetos";

function App() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useMemo(() => {
    window.addEventListener("resize", isMobileVisibility);
    isMobileVisibility();
  }, []);

  function isMobileVisibility() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      setIsMobile(true);
    } else setIsMobile(false);
  }

  return (
    <Theme>
      <GlobalStyle />
      <Header mobileVisibility={isMobile} />
      <Introducao />
      <Sobre />
      <Projetos mobileVisibility={isMobile} />
    </Theme>
  );
}

export default App;
