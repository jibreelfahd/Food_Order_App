import React from "react";

import styles from './MealsItem.module.css';
import MealsForm from "../MealsForm/MealsForm";

const MealsItem = ({ name, description, price}) => {
  const prices = `$${price.toFixed(2)}`;

  return (
    <li className={styles['meal--item']}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{prices}</div>
      </div>
      <div>
        <MealsForm />
      </div>
    </li>
  )
};

export default MealsItem;