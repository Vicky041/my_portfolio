import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';


const data = [
  {
    avatar: AVTR1,
    name: "Sussan",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo",
  },
  {
    avatar: AVTR2,
    name: "John Deo",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo",
  },
  {
    avatar: AVTR3,
    name: "Mark",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nem",
  },
  {
    avatar: AVTR4,
    name: "Henry",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo coming to you is a chobvuj jfhfhg  hfhfhj hfhfhfn huyh hgghgn fhfbfn hghbghfj ndhfhgb nfhjfhf lsjdhfh ",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination, Navigation, Scrollbar, ]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>
      
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
