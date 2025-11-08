import type { ReactNode } from "react";
import styles from "./Button.module.scss";
import { NavLink } from "react-router-dom";

interface ButtonProps {
  text?: string;
  color?: string;
  textColor?: string;
  hoverColor?: string;
  size?: "usm" | "sm" | "md" | "lg" | "xl";
  to?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const Button = ({
  text,
  color = "#000",
  textColor = "#fff",
  hoverColor = "#484848",
  size = "md",
  to,
  onClick,
  children,
}: ButtonProps) => {
  const classes = `${styles.shopBtn} ${styles[size]}`;

  const buttonStyle = {
    "--bg-color": color,
    "--text-color": textColor,
    "--hover-color": hoverColor,
  } as React.CSSProperties;

  if (to) {
    return (
      <NavLink to={to} className={classes} style={buttonStyle}>
        {text || children}
      </NavLink>
    );
  }

  return (
    <button className={classes} style={buttonStyle} onClick={onClick}>
      {text || children}
    </button>
  );
};

export default Button;
