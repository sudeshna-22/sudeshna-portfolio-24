import React, { useState } from 'react'
import "./header.css"

const Header = () => {
  /*toggle menu */
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">S.P.</a>

        <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" className="nav-link active">
                <i className="uil uil-estate nav-icon"></i>Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="uil uil-user nav-icon"></i>About
              </a>
            </li>
            <li className="nav-item">
              <a href="#interest" className="nav-link">
                <i className="uil uil-heart-sign nav-icon"></i>Field of Interest
              </a>
            </li>
            <li className="nav-item">
              <a href="#expertise" className="nav-link">
                <i className="uil uil-briefcase nav-icon"></i>Expertise
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i className="uil uil-star nav-icon"></i>Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i className="uil uil-briefcase nav-icon"></i>Experience
              </a>
            </li>
            <li className="nav-item">
              <a href="#expertise" className="nav-link">
                <i className="uil uil-graduation-cap nav-icon"></i>Education
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a href="#certifications" className="nav-link">
                <i className="uil uil-award nav-icon"></i>Certifications
              </a>
            </li> */}
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                <i className="uil uil-icons nav-icon" ></i>Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonials" className="nav-link">
                <i className="uil uil-comment-heart nav-icon"></i>Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <i className="uil uil-telegram-alt nav-icon"></i>Get In Touch
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav-close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header