import React from 'react'
import './testimonial.css'
import { Data } from "./Data"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from 'swiper/modules';

const Testimonial = () => {
  return (
    <>
      <section className="testimonials section" id="testimonials">
        <span className="section-subtitle">
          Connect with me
        </span>
        <h2 className="section-title">Testimonials</h2>
        <Swiper className="testimonials-container"
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {Data.map(({ id, image, title, description }) => {
            return (
              <SwiperSlide className='testimonial-card' key={id}>
                <img src={image} alt="" className='testimonial-img'></img>
                <h3 className='testimonial-name'>{title}</h3>
                <p className="testimonial-description">
                  {description}
                </p>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
    </>
  )
}

export default Testimonial