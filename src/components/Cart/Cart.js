import React from "react";

import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";

const Cart = ({ onHide }) => {
  const items = [
    {
      id: "c1",
      name: "Sushi",
      amount: "2",
      price: "12.99",
    },
    {
      id: "c2",
      name: "Sushi",
      amount: "2",
      price: "12.99",
    },
  ].map((item) => (
    <li key={item.id}>
      <div>
        <h2>{item.name}</h2>
        <span className={styles.price}>${item.price}</span>
        <span className={styles.amount}>x {item.amount}</span>
      </div>
      <div className={styles.cart__controls}>
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  ));

  return (
    <Modal onClickBg={onHide}>
      <ul className={styles["cart--items"]}>
        {items}
      </ul>
      <div className={styles.cart__total}>
        <span>Total Amount</span>
        <span>$88.99</span>
      </div>
      <div className={styles.cart__actions}>
        <button onClick={onHide} className={styles.cart__close}>Close</button>
        <button className={styles.cart__order}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
