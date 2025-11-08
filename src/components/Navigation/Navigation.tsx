import { NavLink } from "react-router-dom";
import React from "react";
import styles from "./Navigation.module.scss";
import { LogoName } from "../../costants";
import { BurgerButtonIcon } from "../../assets/icons";

function Navigation() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.header}>
          {/* Logo */}
          <h1>
            <NavLink to="/" className={styles.logo}>
              {LogoName}
            </NavLink>
          </h1>

          {/* Desktop Menu */}
          <ul className={styles.desktopMenu}>
            {["Home", "Deals", "New Arrivals"].map((item) => (
              <li key={item} className={styles.menuItem}>
                <NavLink to="/">{item}</NavLink>
              </li>
            ))}
          </ul>

          {/* Burger Button */}
          <div
            className={styles.burgerWrapper}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <BurgerButtonIcon className={styles.burgerIcon} />
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`${styles.mobileMenu} ${
            menuOpen ? styles.open : ""
          }`}
        >
          {["Home", "Deals", "New Arrivals"].map((item) => (
            <li
              key={item}
              className={styles.mobileItem}
              onClick={() => setMenuOpen(false)}
            >
              <NavLink to="/">{item}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
