import {
  FreeShipingIcon,
  HightQualityIcon,
  Support24Icon,
  WarranyProtectionIcon,
} from "../../assets/icons";
import styles from "./FeatureHighlights.module.scss";

const FeatureHighlights = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.highlights}>
          <div className={styles.frst}>
          <HightQualityIcon className={styles.icon} />
            <div>
              <p>High Quality</p>
              <p>crafted from top materials</p>
            </div>
          </div>
          <div className={styles.scnd}>
            <WarranyProtectionIcon className={styles.icon} />
            <div>
              <p>Warrany Protection</p>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className={styles.thrd}>
            <FreeShipingIcon className={styles.icon} />
            <div>
              <p>Free Shipping</p>
              <p>Order over 150 $</p>
            </div>
          </div>
          <div className={styles.forth}>
            <Support24Icon className={styles.icon} />
            <div>
              <p>24/7 Support</p>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
