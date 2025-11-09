import React, { useRef, useEffect, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= testimonials.length) return 0;
        return next;
      });
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Scroll to current slide
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const slideWidth = container.firstChild
        ? (container.firstChild as HTMLElement).clientWidth
        : 0;
      container.scrollTo({
        left: slideWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <section className={styles.wrap}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.sliderWrap} ref={containerRef}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.slide}>
            <TestimonialCard item={t} featured />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
