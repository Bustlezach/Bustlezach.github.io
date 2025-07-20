import React from 'react'
import './Projects.css';

function Projects() {
  return (
     <section className="projects fade-in" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Project One</h3>
          <p>React app for managing tasks.</p>
        </div>
        <div className="project-card">
          <h3>Project Two</h3>
          <p>Portfolio website built with plain CSS and React.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects