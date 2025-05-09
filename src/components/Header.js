import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <header>
      <div className="hero">
        <h1>Dinil Hansara</h1>
        <p>UI/UX Designer • Web Developer • Entrepreneur</p>
        <Link to="/contact" className="btn">Let’s Connect</Link>
      </div>
      <nav>
        <button id="darkToggle" onClick={toggleDarkMode}>🌙</button>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/#projects">Projects</Link>
        <a href="/cv.png" download>Resume</a>
        <a href="/blog.html">Blog</a>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
