import React, { useContext } from "react";

import MealsForm from "../MealsForm/MealsForm";
import CartContext from "../../../store/cart-context";

import styles from "./MealsItem.module.css";

const MealsItem = ({ id, name, description, price }) => {
  const cartItemCtx = useContext(CartContext);

  const prices = `$${price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartItemCtx.addItems({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  };

  return (
    <li className={styles["meal--item"]}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{prices}</div>
      </div>
      <div>
        <MealsForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
