import React from "react";

import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal/Modal";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Modal />
        <Meals />
      </main>
    </>
  );
};

export default App;
