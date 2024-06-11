import React from "react";

import styles from './MealsForm.module.css';
import Input from "../../UI/Input/Input";

const MealsForm = (props) => {
  return (
    <form className={styles['meals--form']}>
      <Input />
      <button>+ Add</button>
    </form>
  );
};

export default MealsForm;