import React from "react";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [
    {
      id: "c1",
      name: "Sushi",
      amount: "2",
      price: "12.99",
    },
    {
      id: "c1",
      name: "Sushi",
      amount: "2",
      price: "12.99",
    },
  ];

  const items = cartItems.map((item) => (
    <li>
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
    <div>
      <ul className={styles["cart--items"]}>
        {items}
      </ul>
      <div className={styles.cart__total}>
        <span>Total Amount</span>
        <span>$88.99</span>
      </div>
      <div className={styles.cart__actions}>
        <button className={styles.cart__close}>Close</button>
        <button className={styles.cart__order}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
