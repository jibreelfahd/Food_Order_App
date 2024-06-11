import React from "react";

import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label>Amount</label>
      <input />
    </div>
  )
};

export default Input;