import styles from "./FashionBrands.module.scss";
import Channel from "../../assets/images/FashionBrands/logo.png";
import luiviton from "../../assets/images/FashionBrands/logo (1).png";
import prada from "../../assets/images/FashionBrands/logo (2).png";
import calvinklien from "../../assets/images/FashionBrands/logo (3).png";
import denim from "../../assets/images/FashionBrands/logo (4).png";

const logos = [Channel, luiviton, prada, calvinklien, denim];

const FashionBrands = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {logos.concat(logos).map((logo, index) => (
          <img key={index} src={logo} alt="Fashion Brand Logo" />
        ))}
      </div>
    </div>
  );
};

export default FashionBrands;
