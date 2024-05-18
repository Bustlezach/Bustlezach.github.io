import React, { lazy, Suspense, useContext } from "react";
import NavBar from "./components/NavBar";
import Mode from "./components/Mode";
import Intro from "./components/Intro";
import About from "./components/About";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";
import { MyContext } from "./context/MyContext";
const LazyPortfolio = lazy(() => import("./components/Portfolio"));
const LazyContactme = lazy(() => import("./components/Contactme"));

function App() {
  const { mode } = useContext(MyContext);
  const black = `rgb(30 30 30)`;
  const white = `#fff`;

  const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${(props) =>
        props.bgColor === "night" ? black : white};
    }
  `;

  return (
    <div className="App">
      <GlobalStyle bgColor={mode} />
      <Mode />
      <NavBar />
      <Intro />
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyPortfolio />
        <LazyContactme />
      </Suspense>
      {/* <Clients /> */}
      <Footer />
    </div>
  );
}

export default App;
