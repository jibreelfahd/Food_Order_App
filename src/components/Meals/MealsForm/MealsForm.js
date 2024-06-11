import React from "react";

import styles from "./MealsForm.module.css";
import Input from "../../UI/Input/Input";

const MealsForm = (props) => {
  return (
    <form className={styles["meals--form"]}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealsForm;
