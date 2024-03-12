import React from "react";
import GlobalStyle from "./styleds/GlobalStyle";
import Theme from "./styleds/Theme";
import Introducao from "./sections/introducao/Introducao";
import Sobre from "./sections/sobre-min/Sobre";
import Projetos from "./sections/projetos/Projetos";
import Contato from "./sections/contato/Contato";
import Footer from "./sections/footer/Footer";
import HeaderComponent from "./components/header/HeaderComponent";

function App() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [headerHeight, setHeaderHeight] = React.useState();
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    setHeaderHeight(document.querySelector("header").offsetHeight);
    handleResize();
  }, []);

  function handleResize() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      setIsMobile(true);
    } else setIsMobile(false);
    setHeaderHeight(document.querySelector("header").offsetHeight);
    setWindowHeight(window.innerHeight);
  }

  return (
    <Theme>
      <main>
        <GlobalStyle />
        <HeaderComponent isMobile={isMobile} />
        <Introducao
          heightHeader={headerHeight && headerHeight}
          windowHeight={windowHeight}
        />
        <Sobre windowHeight={windowHeight} />
        {/* <Projetos isMobile={isMobile} />
        <Contato /> */}
      </main>
      <Footer />
    </Theme>
  );
}

export default App;
