import React from "react";
import styles from "./InstagramStrip.module.scss";

type InstagramStripProps = { 
  images: string[];
};

const InstagramStrip: React.FC<InstagramStripProps> = ({
  images,
}) => {
  return (
    <section className={styles.wrap}>
      <div className={styles.header}>
        <h2 className={styles.title}>Follow Us On Instagram</h2>
        <p className={styles.subtitle}> See how our customers style our products and get inspired by their looks.</p>
      </div>

      <div className={styles.scroller}>
        {images.map((src, i) => (
          <div
            key={i}
            className={`${styles.card} ${i % 2 ? styles.cardRaised : ""}`}
          >
            <img src={src} alt={`Instagram ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramStrip;
