import React from 'react';
import './projects.css';
import Image1 from "../../assets/aadarsh.jpg";

import { Data } from "./ProjectData"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';

const Project = () => {
  return (
    <section className="projects section" id="projects">
      <span className="section-subtitle">
        Discover My Projects
      </span>
      <h2 className="section-title">Projects</h2>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Autoplay, Pagination]}
        className="projects-container container"
      >
        {Data.map(({ id, title, description, link }) => {
          const showViewButton = id !== 3;
          return (
            <SwiperSlide className='project-content' key={id}>
              {/* <img src={image} alt="sudeshna's img" className="project-img" /> */}

              <div className='about-data'>
                <h2 className='project-title'>{title}</h2>
                <p className="about-description">{description}</p>

                {showViewButton && (
                  <a href={link} className="button button-flex" target="_blank" rel="noopener noreferrer">
                    View <i className="uil uil-link"></i>
                  </a>
                )}
              </div>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </section>
  );
};

export default Project;
