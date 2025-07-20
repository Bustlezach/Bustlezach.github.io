import React from 'react'
import './Hero.css';

function Hero() {
  return (
     <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm Zach</h1>
        <p>A passionate Full-Stack Developer</p>
        <div className="hero-buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact" className="secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero