import React from "react";
import Hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <div className="testimonials">
      <div className="testimonials_wrapper">
        <div className="testimonial_container">
          <span>Top Rated</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>

        <img src={Hero} alt="" />

        <div className="testimonial_container">
          <span>100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>

      <div className="reviews">
        Reviews
      </div>

      <div className="carousal">
        <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={20}
        className="tCarousel"
        >
          {TestimonialsData.map((testimonial, ind) => {
            return (
              <SwiperSlide>
                <div className="testimonial">
                  <img src={testimonial.image} alt="" />

                  <span>{testimonial.comment}</span>

                  <hr />

                  <span>{testimonial.name}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
