import styles from "./PeakyBlinders.module.scss";
import peakyBlinders from "../../assets/images/PeakyBlinders/PeakyBlinders.png";
import Button from "../../UI/Button/Button";

const PeakyBlinders = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgBox}>
          <img src={peakyBlinders} alt="Peaky Blinders Collection" />
        </div>
        <div className={styles.details}>
          <p className={styles.category}>Women Collection</p>
          <h2 className={styles.title}>Peaky Blinders</h2>
          <p className={styles.tagline}>DESCRIPTION</p>
          <p className={styles.description}>
            Discover the Peaky Blinders collection — crafted with premium
            fabrics and timeless design. Perfect for women who appreciate bold
            style with a touch of sophistication. Available in multiple sizes.
          </p>
          <div className={styles.sizes}>
            <span>Size:</span>
            <Button size="usm">M</Button>
          </div>
          <p className={styles.price}>$1000.00</p>
          <Button size="md">Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default PeakyBlinders;
