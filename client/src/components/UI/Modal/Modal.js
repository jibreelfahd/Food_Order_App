import React from "react";
import ReactDOM from "react-dom";

import Card from "../Card/Card";

import styles from "./Modal.module.css";

// desc: backdrop overlay component for cartmodal
const Backdrop = ({ onClicks }) => {
  return <div className={styles.overlay} onClick={onClicks}/>;
};

const CartModal = (props) => {
  return (
    <Card className={styles.modal}>
      {props.children}
    </Card>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClicks={props.onClickBg}/>,
        document.querySelector(".backdrop-overlay")
      )}
      {ReactDOM.createPortal(
        <CartModal>{props.children}</CartModal>,
        document.querySelector(".modal-overlay")
      )}
    </>
  );
};

export default Modal;
