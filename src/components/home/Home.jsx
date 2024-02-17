import React from 'react';
import "./home.css"
import Social from './Social';
import FemaleImg from "../../assets/favicon.png";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />
          <div className="home-img"></div>
          <div className="home-information">
            <h1 className="home-title button-flex">
              <img src={FemaleImg} alt="female's img" className="home-female-icon" />
              Sudeshna P.
            </h1>
            <h3 className="home-subtitle">Software Engineer</h3>
            <p className="home-description">Hello! I'am Sudeshna Pandey. This is description for a while now please modify this!</p>

            <a href="#contact" className="button button-flex">Contact Me <i className="uil uil-telegram-alt"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home