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
            <span>Hello! I'am Sudeshna Pandey. </span>

            <p className="home-description">Fast learner proficient at quickly grasping new concepts & technologies. </p>

            <a href="#expertise" className="button button-flex">My Expertise <i className="uil uil-briefcase"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home