import styles from "./Header.module.scss";
import manImage from "../../assets/images/header/headerimg1.png";
import img2 from "../../assets/images/header/headerimage2.png";
import img3 from "../../assets/images/header/headerimg3.png";
import img4 from "../../assets/images/header/headerimg4.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Left Image */}
          <div className={styles.imageBox}>
            <img src={manImage} alt="Man model" />
          </div>

          {/* Center Section */}
          <div className={styles.centerSection}>
            <div className={styles.topImage}>
              <img src={img2} alt="Product" />
            </div>

            <div className={styles.textBlock}>
              <p className={styles.title}>ULTIMATE</p>
              <span className={styles.strokeText}>SALE</span>
              <p className={styles.subtitle}>NEW COLLECTION</p>
              <button className={styles.shopBtn}>SHOP NOW</button>
            </div>

            <div className={styles.bottomImage}>
              <img src={img3} alt="Model" />
            </div>
          </div>

          {/* Right Image */}
          <div className={styles.imageBox}>
            <img src={img4} alt="Woman model" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
