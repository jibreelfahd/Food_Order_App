import React, { useRef, useState } from "react";

import styles from "./MealsForm.module.css";
import Input from "../../UI/Input/Input";

const MealsForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const amountOfCartItems = amountInputRef.current.value;
    const enteredAmount = +amountOfCartItems;

    if (
      amountOfCartItems.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={styles["meals--form"]} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount!</p>}
    </form>
  );
};

export default MealsForm;
