import React, { useContext } from "react";

import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";

import styles from "./Cart.module.css";

const Cart = ({ onHide }) => {
  const cartCtx = useContext(CartContext);

  const totalCartAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  //@desc: checking if cart items are available
  // --in order to display the 'order button
  const hasItems = cartCtx.items.length > 0;

  const increaseCartItem = (item) => {
    cartCtx.addItems({...item, amount: 1})
  };

  const decreaseCartItem = (id) => {
    cartCtx.removeItems(id);
  };

  const items = cartCtx.items.map((item) => (
    <li key={item.id}>
      <div>
        <h2>{item.name}</h2>
        <span className={styles.price}>${item.price.toFixed(2)}</span>
        <span className={styles.amount}>x {item.amount}</span>
      </div>
      <div className={styles.cart__controls}>
        <button onClick={decreaseCartItem.bind(null, item.id)}>–</button>
        <button onClick={increaseCartItem.bind(null, item)}>+</button>
      </div>
    </li>
  ));

  return (
    <Modal onClickBg={onHide}>
      <ul className={styles["cart--items"]}>{items}</ul>
      <div className={styles.cart__total}>
        <span>Total Amount</span>
        <span>{totalCartAmount}</span>
      </div>
      <div className={styles.cart__actions}>
        <button onClick={onHide} className={styles.cart__close}>
          Close
        </button>
        {hasItems && <button className={styles.cart__order}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
