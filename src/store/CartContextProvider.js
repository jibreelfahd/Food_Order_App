import React from "react";

import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  const addItemsToCart = (items) => {};

  const removeItemsFromCart = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItems: addItemsToCart,
    removeItems: removeItemsFromCart
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
