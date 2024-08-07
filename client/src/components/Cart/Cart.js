import React, { useContext, useState } from "react";

import Modal from "../UI/Modal/Modal";
import Checkout from "./Checkout.js";
import CartContext from "../../store/cart-context";

import styles from "./Cart.module.css";

const Cart = ({ onHide }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmit, setHasSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalCartAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  //@desc: checking if cart items are available
  // --in order to display the 'order button
  const hasItems = cartCtx.items.length > 0;

  const increaseCartItem = (item) => {
    cartCtx.addItems({ ...item, amount: 1 });
  };

  const decreaseCartItem = (id) => {
    cartCtx.removeItems(id);
  };

  const checkoutHandler = () => {
    setIsCheckout(true);
  };

  const submitCartHandler = async ({
    customerName,
    street,
    postalCode,
    city,
  }) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:8080/meals/order/meal", {
        method: "POST",
        body: JSON.stringify({
          items: cartCtx.items,
          customerName,
          street,
          postalCode,
          city,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Sorry something happened, Try Again Later");
      }

      const data = await response.json();
      console.log(data);

      setIsSubmitting(false);
      setHasSubmit(true);
      cartCtx.clearCart();
    } catch (err) {
      console.log(err);
    }
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

  const actionButtons = (
    <div className={styles.cart__actions}>
      <button onClick={onHide} className={styles.cart__close}>
        Close
      </button>
      {hasItems && (
        <button className={styles.cart__order} onClick={checkoutHandler}>
          Order
        </button>
      )}
    </div>
  );

  const isSubmittingOrderModal = <p>Submitting Order...</p>;

  const hasSubmitOrderModal = (
    <>
      <p>Order Recieved, you will be contacted shortly</p>
      <div className={styles.cart__actions}>
        <button onClick={onHide} className={styles.cart__order}>
          Close
        </button>
      </div>
    </>
  );

  const cartModal = (
    <>
      <ul className={styles["cart--items"]}>{items}</ul>
      <div className={styles.cart__total}>
        <span>Total Amount</span>
        <span>{totalCartAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitCartHandler} onCancel={onHide} />
      )}
      {!isCheckout && actionButtons}
    </>
  );
  return <Modal onClickBg={onHide}>
    {!isSubmitting && !hasSubmit && cartModal}
    {isSubmitting && isSubmittingOrderModal}
    {hasSubmit&& hasSubmitOrderModal}
    </Modal>;
};

export default Cart;
