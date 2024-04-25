import React from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
// import Clients from "./components/Clients";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <Portfolio />
      {/* <Clients /> */}
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
