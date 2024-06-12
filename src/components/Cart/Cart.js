import React, { useContext } from "react";

import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";

import styles from "./Cart.module.css";

const Cart = ({ onHide }) => {
  const cartCtx = useContext(CartContext);

  const items =  (
    <li key={cartCtx.items.id}>
      <div>
        <h2>{cartCtx.items.name}</h2>
        <span className={styles.price}>${cartCtx.items.price}</span>
        <span className={styles.amount}>x {cartCtx.items.amount}</span>
      </div>
      <div className={styles.cart__controls}>
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  );

  return (
    <Modal onClickBg={onHide}>
      <ul className={styles["cart--items"]}>
        {items}
      </ul>
      <div className={styles.cart__total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount}</span>
      </div>
      <div className={styles.cart__actions}>
        <button onClick={onHide} className={styles.cart__close}>Close</button>
        <button className={styles.cart__order}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
