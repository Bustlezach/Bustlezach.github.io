import React from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <Portfolio />
      <Clients />
    </div>
  );
}

export default App;
