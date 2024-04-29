import React, { lazy, Suspense } from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";
const LazyPortfolio = lazy(() => import("./components/Portfolio"))
const LazyContactme = lazy(() => import("./components/Portfolio"))


function App() {


  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyPortfolio />
        <LazyContactme />
      </Suspense>
      {/* <Clients /> */}
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
