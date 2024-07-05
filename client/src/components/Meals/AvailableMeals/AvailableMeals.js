import React, { useEffect, useState } from "react";

import Card from "../../UI/Card/Card";
import styles from "./AvailableMeals.module.css";
import MealsItem from "../MealsItem/MealsItem";

const AvailableMeals = () => {
  const [mealsData, setMealsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("http://localhost:8080/meals/fetch/meal");

        if (!response.ok) {
          throw new Error("Sorry something went wrong");
        }

        const { meals } = await response.json();

        setMealsData(meals);
      } catch (err) {
        setHasError(err.message);
        console.log("Error from fetching data", err);
      }
    };
    setIsLoading(false);
    
    fetchMeals()
  }, []);

  if (isLoading) {
    return (
      <section>
        <p className={styles.loading}>Meals Loading....</p>;
      </section>
    );
  }

  if (!isLoading && hasError) {
   return <section>
      <p className={styles.error}>{hasError}</p>;
    </section>;
  }

  const mealItems = mealsData.map((meals) => (
    <MealsItem
      key={meals._id}
      id={meals._id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));

  // if (!isLoading && mealsData.length > 0) {
  //   content = <ul>{mealItems}</ul>;
  // }

  return (
    <section className={styles.meals}>
      <Card>{mealItems}</Card>
    </section>
  );
};

export default AvailableMeals;
