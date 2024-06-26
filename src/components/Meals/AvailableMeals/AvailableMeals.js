import React from "react";

import Card from "../../UI/Card/Card";
import styles from "./AvailableMeals.module.css";
import MealsItem from "../MealsItem/MealsItem";

const DATA = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Ponmo",
    description: "A Nigerian speciality",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 22.45,
  },
  {
    id: "m4",
    name: "Nigerian Jollof Rice",
    description: "The best food in West Africa",
    price: 25.55,
  },
];

const AvailableMeals = () => {
  const mealItems = DATA.map((meals) => (
    <MealsItem
      key={meals.id}
      id={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealItems}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
