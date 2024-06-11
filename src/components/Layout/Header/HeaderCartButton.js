import React from "react";

import Cart from "../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <Cart />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
