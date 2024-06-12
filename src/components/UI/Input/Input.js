import React from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef(({ input, label }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} ref={ref} />
    </div>
  );
});

export default Input;
