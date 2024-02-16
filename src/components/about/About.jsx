import React from 'react'
import "./about.css"
import Information from './Information';
import AboutImg from "../../assets/sudeshna.jpg";
import CV from "../../assets/Sudeshna-Pandey-CV.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">Get To Know Me</h2>
      <span className="section-subtitle">
        Let's Dive In!
      </span>
      <div className="about-container container grid">
        <img src={AboutImg} alt="sudeshna's img" className="about-img" />

        <div className='about-data'>
          <Information />

          <p className="about-description">Developer I create web pages with UI / UX user interface, I have yeares of experience and many cliernts are happy with the projects carried out.</p>

          <a download href={CV} className="button button-flex">My Resume
            <i class="uil uil-file-download-alt"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About