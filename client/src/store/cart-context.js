import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItemsToCart: (item) => {},
  removeItemsFromCart: (id) => {},
});

export default CartContext;