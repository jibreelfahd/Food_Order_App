import { useState, useRef } from "react";

import styles from "./Checkout.module.css";

// helper functions
const isEmpty = (value) => value.trim() === "";
const isNotSixChars = (value) => value.trim().length !== 6;

const Checkout = ({ onCancel }) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

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

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = !isNotSixChars(enteredPostalCode);

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    console.log("form is valid");
  };

  const nameInputClasses = `${styles["form-control"]} ${
    !formValidity.name ? styles.invalid : ""
  }`;
  const streetInputClasses = `${styles["form-control"]} ${
    !formValidity.street ? styles.invalid : ""
  }`;
  const cityInputClasses = `${styles["form-control"]} ${
    !formValidity.city ? styles.invalid : ""
  }`;
  const postalCodeInputClasses = `${styles["form-control"]} ${
    !formValidity.postalCode ? styles.invalid : ""
  }`;

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" ref={nameInputRef} />
        {!formValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={streetInputRef} />
        {!formValidity.street && <p>Please enter a valid address!</p>}
      </div>
      <div className={postalCodeInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input id="postal" type="text" ref={postalCodeInputRef} />
        {!formValidity.postalCode && <p>Please enter a valid Postal Code!</p>}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={cityInputRef} />
        {!formValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={onCancel} className={styles.close}>
          Close
        </button>
        <button className={styles.confirm}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
