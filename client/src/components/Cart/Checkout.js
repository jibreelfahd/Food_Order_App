import { useRef } from "react";

import styles from "./Checkout.module.css";

const Checkout = ({ onCancel }) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["form-control"]}>
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" ref={enteredName} />
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={enteredStreet} />
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="postal">Postal Code</label>
        <input id="postal" type="text" ref={enteredPostalCode} />
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={enteredCity} />
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
