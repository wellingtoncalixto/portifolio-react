import React from "react";
import Header from "./components/header/Header";
import GlobalStyle from "./styleds/GlobalStyle";
import Theme from "./styleds/Theme";
import Introducao from "./sections/introducao/Introducao";
import Sobre from "./sections/sobre-min/Sobre";
import Projetos from "./sections/projetos/Projetos";
import Contato from "./sections/contato/Contato";
import Footer from "./sections/footer/Footer";

function App() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [headerHeight, setHeaderHeight] = React.useState();

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
  }

  return (
    <Theme>
      <main>
        <GlobalStyle />
        <Header isMobile={isMobile} />
        <Introducao heightHeader={headerHeight && headerHeight} />
        {/* <Sobre />
        <Projetos isMobile={isMobile} />
        <Contato /> */}
      </main>
      {/* <Footer /> */}
    </Theme>
  );
}

export default App;
