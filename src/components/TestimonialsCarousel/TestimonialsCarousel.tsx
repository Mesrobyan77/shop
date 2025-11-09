import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./TestimonialsCarousel.module.scss";
import type { Testimonial } from "../../types";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

type Props = {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
};

const TestimonialsCarousel: React.FC<Props> = ({
  title = "This Is What Our Customers Say",
  subtitle = "Hear from our happy customers who love our premium quality products and excellent service.",
  testimonials,
}) => {
  return (
    <section className={styles.wrap}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.sliderWrap}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          centeredSlides
          initialSlide={1}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            700: { slidesPerView: 1.2 },
            900: { slidesPerView: 1.6 },
            1200: { slidesPerView: 2.2 },
          }}
          className={styles.swiper}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <TestimonialCard item={t} featured />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
