import React from 'react';
import './projects.css';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from 'swiper/modules';

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
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="projects-container container"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Project;
