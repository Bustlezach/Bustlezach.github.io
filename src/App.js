import React, { lazy, Suspense, useContext } from "react";
import NavBar from "./components/NavBar";
import Mode from "./components/Mode";
import Intro from "./components/Intro";
import About from "./components/About";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";
import { MyContext } from "./context/MyContext";
import { FadeInSectionY } from "./components/FadeInSection";
import Portfolio from "./components/Portfolio";
import Contactme from "./components/Contactme";
// const LazyPortfolio = lazy(() => import("./components/Portfolio"));
// const LazyContactme = lazy(() => import("./components/Contactme"));

function App() {
  const { mode } = useContext(MyContext);
  const black = `rgb(30 30 30)`;
  const white = `#fff`;

  const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${(props) => (props.color === "night" ? black : white)};
    }
  `;

  return (
    <div className="App">
      <GlobalStyle color={mode} />
      <NavBar />
      <Mode />
      <Intro />
      <About />
      <FadeInSectionY>
        <Portfolio />
      </FadeInSectionY>
      <FadeInSectionY>
        <Contactme />
      </FadeInSectionY>
      {/* <Clients /> */}
      <Footer />
    </div>
  );
}

export default App;
