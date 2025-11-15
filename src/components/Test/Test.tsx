// src/pages/HomePage.tsx
import React, { useEffect, useState } from "react";


import styles from "./Test.module.scss";
import Button from "../../UI/Button/Button";

import image from '../../assets/images/NewArrivals/Images.png';

type ProductCategory =
  | "womensFashion"
  | "mensFashion"
  | "womenAccessories"
  | "menAccessories"
  | "discountDeals";

interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  status?: string; // "Almost Sold Out" etc.
}

/* -------------------- FAKE DATA -------------------- */

const heroSlides = [
  {
    id: 1,
    image: image,
    label: "Spring Sale",
    discount: "30% OFF",
  },
  {
    id: 2,
    image: image,
    label: "Summer Collection",
    discount: "25% OFF",
  },
  {
    id: 3,
    image: image,
    label: "New Season",
    discount: "40% OFF",
  },
];

const productsByCategory: Record<ProductCategory, Product[]> = {
  womensFashion: [
    {
      id: 1,
      name: "Shiny Dress",
      subtitle: "Afashion",
      price: 95.5,
      image,
      rating: 5,
      reviewCount: 41,
      status: "Almost Sold Out",
    },
    {
      id: 2,
      name: "Long Dress",
      subtitle: "Afashion",
      price: 95.5,
      image,
      rating: 5,
      reviewCount: 41,
      status: "Almost Sold Out",
    },
    {
      id: 3,
      name: "Full Sweater",
      subtitle: "Afashion",
      price: 95.5,
      image,
      rating: 5,
      reviewCount: 41,
      status: "Almost Sold Out",
    },
    {
      id: 4,
      name: "White Dress",
      subtitle: "Afashion",
      price: 95.5,
      image,
      rating: 5,
      reviewCount: 41,
      status: "Almost Sold Out",
    },
    {
      id: 5,
      name: "Colorful Dress",
      subtitle: "Afashion",
      price: 95.5,
      image,
      rating: 5,
      reviewCount: 41,
      status: "Almost Sold Out",
    },
    {
      id: 6,
      name: "White Shirt",
      subtitle: "Afashion",
      price: 95.5,
      image,
      rating: 5,
      reviewCount: 41,
      status: "Almost Sold Out",
    },
  ],
  mensFashion: [
    {
      id: 7,
      name: "Casual Shirt",
      subtitle: "Mens Line",
      price: 79.9,
      image,
      rating: 4,
      reviewCount: 28,
    },
    {
      id: 8,
      name: "Classic Suit",
      subtitle: "Mens Line",
      price: 149.9,
      image,
      rating: 5,
      reviewCount: 61,
    },
  ],
  womenAccessories: [
    {
      id: 9,
      name: "Straw Hat",
      subtitle: "Accessories",
      price: 39.5,
      image,
      rating: 4,
      reviewCount: 17,
    },
    {
      id: 10,
      name: "Shoulder Bag",
      subtitle: "Accessories",
      price: 59.0,
      image,
      rating: 5,
      reviewCount: 32,
    },
  ],
  menAccessories: [
    {
      id: 11,
      name: "Leather Belt",
      subtitle: "Accessories",
      price: 29.99,
      image,
      rating: 4,
      reviewCount: 20,
    },
  ],
  discountDeals: [
    {
      id: 12,
      name: "Blue Denim Jacket",
      subtitle: "Sale",
      price: 65.0,
      image,
      rating: 5,
      reviewCount: 50,
      status: "Limited Time",
    },
  ],
};

const categoryList: { id: ProductCategory; label: string }[] = [
  { id: "mensFashion", label: "Men's Fashion" },
  { id: "womensFashion", label: "Women's Fashion" },
  { id: "womenAccessories", label: "Women Accessories" },
  { id: "menAccessories", label: "Men Accessories" },
  { id: "discountDeals", label: "Discount Deals" },
];

/* -------------------- COUNTDOWN HOOK -------------------- */

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 2); // 2 days from now

const getRemainingTime = () => {
  const diff = targetDate.getTime() - new Date().getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};


/* -------------------- COMPONENTS -------------------- */

export const DealsOfTheMonth: React.FC = () => {
  const [time, setTime] = useState(getRemainingTime());
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTime(getRemainingTime()), 1000);
    return () => clearInterval(id);
  }, []);

  const total = heroSlides.length;

  const goTo = (index: number) => {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    setCurrentSlide(index);
  };

  const handlePrev = () => goTo(currentSlide - 1);
  const handleNext = () => goTo(currentSlide + 1);

  return (
    <section className={styles.deals}>
      <div className={styles.dealsText}>
        <h2>Deals Of The Month</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem.
        </p>

        <Button text="Buy Now" size="md" />

        <div className={styles.dealsCountdown}>
          <p>Hurry, Before It&apos;s Too Late!</p>
          <div className={styles.timer}>
            <TimeBox label="Days" value={time.days} />
            <TimeBox label="Hr" value={time.hours} />
            <TimeBox label="Mins" value={time.minutes} />
            <TimeBox label="Sec" value={time.seconds} />
          </div>
        </div>
      </div>

      <div className={styles.dealsSlider}>
        <div className={styles.sliderViewport}>
          <div
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroSlides.map((slide) => (
              <div key={slide.id} className={styles.heroSlide}>
                <img src={slide.image} alt={slide.label} />
                <div className={styles.heroBadge}>
                  <span>0{slide.id} — {slide.label}</span>
                  <strong>{slide.discount}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sliderFooter}>
          <div className={styles.sliderArrows}>
            <button
              type="button"
              className={styles.navButton}
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              type="button"
              className={styles.navButton}
              onClick={handleNext}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

          <div className={styles.sliderDots}>
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`${styles.dot} ${
                  index === currentSlide ? styles.dotActive : ""
                }`}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimeBox: React.FC<{ label: string; value: number }> = ({
  label,
  value,
}) => (
  <div className={styles.timeBox}>
    <span className={styles.timeValue}>
      {value.toString().padStart(2, "0")}
    </span>
    <span className={styles.timeLabel}>{label}</span>
  </div>
);

export const NewArrivals: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("womensFashion");

  const products = productsByCategory[activeCategory];

  return (
    <section className={styles.newArrivals}>
      <div className={styles.newArrivalsHeader}>
        <h2>New Arrivals</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem.
        </p>

        <div className={styles.categories}>
          {categoryList.map((cat) => (
            <Button
              key={cat.id}
              text={cat.label}
              size="sm"
              color={activeCategory === cat.id ? "#000" : "#f3f3f3"}
              textColor={activeCategory === cat.id ? "#fff" : "#000"}
              hoverColor={activeCategory === cat.id ? "#484848" : "#e0e0e0"}
              onClick={() => setActiveCategory(cat.id)}
            />
          ))}
        </div>
      </div>

      <div className={styles.productsGrid}>
        {products.map((p) => (
          <article key={p.id} className={styles.productCard}>
            <div className={styles.productImageWrapper}>
              <img src={p.image} alt={p.name} />
            </div>
            <div className={styles.productInfo}>
              <h3>{p.name}</h3>
              <span className={styles.subtitle}>{p.subtitle}</span>

              <div className={styles.ratingRow}>
                <span className={styles.stars}>
                  {"★".repeat(p.rating)}
                  {"☆".repeat(5 - p.rating)}
                </span>
                <span className={styles.reviews}>
                  ({p.reviewCount}) Customer Reviews
                </span>
              </div>

              <div className={styles.bottomRow}>
                <span className={styles.price}>${p.price.toFixed(2)}</span>
                {p.status && (
                  <span className={styles.status}>{p.status}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.viewMoreWrapper}>
        <Button text="View More" size="sm" />
      </div>
    </section>
  );
};
