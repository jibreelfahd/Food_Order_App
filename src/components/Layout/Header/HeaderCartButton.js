import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({ onClickButton }) => {
  const [isCartHighlighted, setIsCartHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfItems = items.reduce((curNumber, items) => {
    return curNumber + items.amount;
  }, 0);

  // @desc: bump upon adding cart items
  const classesBtn = `${styles.button} ${isCartHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsCartHighlighted(true);

    const timer = setTimeout(() => {
      setIsCartHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={onClickButton} className={classesBtn}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
