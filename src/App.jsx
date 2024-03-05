import React from "react";
import Header from "./components/header/Header";
import Introducao from "./components/introducao/Introducao";
import GlobalStyle from "./styleds/GlobalStyle";
import Theme from "./styleds/Theme";

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
    </Theme>
  );
}

export default App;
