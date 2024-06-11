import React from "react";
import ReactDOM from "react-dom";

import Card from "../Card/Card";
import Cart from "../../Cart/Cart";

import styles from "./Modal.module.css";

// desc: backdrop overlay component for cartmodal
const Backdrop = () => {
  return <div className={styles.overlay} />;
};

const CartModal = () => {
  return (
    <Card className={styles.modal}>
      <Cart />
    </Card>
  );
};
const Modal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.querySelector(".backdrop-overlay")
      )}
      {ReactDOM.createPortal(
        <CartModal />,
        document.querySelector(".modal-overlay")
      )}
    </>
  );
};

export default Modal;
