import React from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>
        <h2>Your Cart</h2>
      </span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
