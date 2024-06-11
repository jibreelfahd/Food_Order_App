import React from "react";

import mealsImage from "../../../assets/meals.jpg";

import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";

const Header = ({ onShow }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>SuberbMeals</h1>
        <HeaderCartButton onClickButton={onShow} />
      </header>
      <div className={styles.main_img}>
        <img src={mealsImage} alt="A bunch of meals" />
      </div>
    </>
  );
};

export default Header;
