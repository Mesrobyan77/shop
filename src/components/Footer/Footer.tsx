import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import man from "../../assets/images/footer/footerImg1.png";
import woman from "../../assets/images/footer/footerimg2.png";
import { LogoName } from "../../costants";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContainer}>
          <img src={man} alt="Man"  className={styles.manImg}/>
          <div className={styles.textBlock}>
            <h2>Subscribe To Our Newsletter</h2>
            <p>
              Get the latest news, product updates, and exclusive offers
              delivered straight to your inbox. Join our community and never
              miss out on what's new and inspiring.
            </p>
            <p className={styles.inputBox}>ExampleEmail@mail.ru</p>
            <button className={styles.subscribeBtn}>Subscribe Now</button>
          </div>
          <img src={woman} alt="Woman" />
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomContainer}>
            <h1 className={styles.logo}>
              <NavLink to="/">{LogoName}</NavLink>
            </h1>
            <ul className={styles.menu}>
              {[
                "Support Center",
                "Invoicing",
                "Contract",
                "Careers",
                "Blog",
                "FAQ,s",
              ].map((item) => (
                <li key={item}>
                  <NavLink to="/">{item}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <p className={styles.copy}>
            Copyright © 2025 Mesrobyan77. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
