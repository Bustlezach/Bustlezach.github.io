import React from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundCanvas from "./components/BackgroundCanvas";
import Sidebar from "./components/Sidebar";
import "./styles/global.css";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
      <BackgroundCanvas />
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
