import React from "react";
import styles from "./TestimonialCard.module.scss";

export type Testimonial = {
  avatar: string;
  name: string;
  role: string;
  text: string;
  rating?: number;
  smallPreview?: { avatar: string };
};

const stars = (n = 5) =>
  Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < n ? styles.starOn : styles.starOff}>
      ★
    </span>
  ));

const TestimonialCard: React.FC<{ item: Testimonial; featured?: boolean }> = ({
  item,
  featured = false,
}) => {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ""}`}>
      <div className={styles.previewTile}></div>
      <div className={styles.content}>
        <div className={styles.person}>
          <img className={styles.avatar} src={item.avatar} alt={item.name} />
          <div>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.role}>{item.role}</div>
            <div className={styles.body}>
              <p className={styles.text}>&quot;{item.text}&quot;</p>
              <div className={styles.stars}>{stars(item.rating)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
