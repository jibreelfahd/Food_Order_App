import React from "react";

import Card from "../Card/Card";
import Cart from "../../Cart/Cart";

import styles from "./Modal.module.css";


const Modal = () => {
  return (
    <>
      <div className={styles.overlay} />
      <Card className={styles.modal}>
        <Cart />
      </Card>
    </>
  );
};

export default Modal;
