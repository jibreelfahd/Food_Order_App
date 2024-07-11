import { useEffect, useRef } from "react";

import useInput from "../hooks/use-input";
import styles from "./Checkout.module.css";

const Checkout = ({ onCancel }) => {
  // const nameInputRef = useRef();
  // const streetInputRef = useRef();
  // const postalCodeInputRef = useRef();
  // const cityInputRef = useRef();
  const { enteredValue: enteredName, valueInputRef: nameInputRef } = useInput();
  const { enteredValue: enteredStreet, valueInputRef: streetInputRef } = useInput();
  const { enteredValue: enteredPostalCode, valueInputRef: postalCodeInputRef } = useInput();
  const { enteredValue: enteredCity, valueInputRef: cityInputRef } = useInput();

  useEffect(() => {
    const newEnteredName = enteredName
    const newEnteredStreet = enteredStreet
    const newEnteredPostalCode = enteredPostalCode
    const newEnteredCity = enteredCity

    console.log(newEnteredCity, newEnteredName, newEnteredPostalCode, newEnteredStreet)
  }, [enteredName, enteredStreet, enteredCity, enteredPostalCode])
  
  const submitHandler = (event) => {
    event.preventDefault();

    // const enteredName = nameInputRef.current.value;
    // const enteredStreet = streetInputRef.current.value;
    // const enteredPostalCode = postalCodeInputRef.current.value;
    // const enteredCity = cityInputRef.current.value;

    
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["form-control"]}>
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" ref={nameInputRef} />
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={streetInputRef} />
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="postal">Postal Code</label>
        <input id="postal" type="text" ref={postalCodeInputRef} />
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={cityInputRef} />
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          onClick={onCancel}
          className={styles.close}
        >Close</button>
        <button className={styles.confirm}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
