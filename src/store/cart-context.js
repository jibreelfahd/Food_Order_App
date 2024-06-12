import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItemsToCart: (items) => {},
  removeItemsFromCart: (id) => {},
});

export default CartContext;