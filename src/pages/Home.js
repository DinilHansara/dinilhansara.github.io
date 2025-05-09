import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <section className="hero-section">
        <h2>Welcome to My Portfolio</h2>
        <p>I’m Dinil Hansara — passionate about design, code, and creating digital experiences that matter.</p>
        <Link to="/contact" className="btn">Get in Touch</Link>
      </section>

      <section id="projects">
        <h2>Featured Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Land & Rental Management System</h3>
            <p>A conceptual platform to manage properties, tenants, and rentals. Built for future scalability.</p>
          </div>
          <div className="project">
            <h3>UX App Prototype</h3>
            <p>Designed a sleek mobile app for student productivity using Figma and UX principles.</p>
            <a href="#" className="btn-small">View Prototype</a>
          </div>
          <div className="project">
            <h3>This Website</h3>
            <p>Live portfolio created with HTML/CSS, hosted using GitHub Pages — everything done in VS Code.</p>
            <a href="https://dinilhansara.github.io" className="btn-small" target="_blank" rel="noopener noreferrer">Visit Site</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
