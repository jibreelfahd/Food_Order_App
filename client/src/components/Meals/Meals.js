import React from "react";

import AvailableMeals from "./AvailableMeals/AvailableMeals";
import MealsContent from "./MealsContent/MealsContent";

const Meals = (props) => {
  return (
    <>
      <MealsContent />
      <AvailableMeals />
    </>
  );
};

export default Meals;
