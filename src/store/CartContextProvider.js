import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartValue = {
  items: [],
  totalAmount: 0,
};

// @desc: reducer function for useReducer
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEMS") {
    const updatedItem = state.items.concat(action.items);
    const updatedTotalAmount = state.totalAmount * action.items.price * action.items.amount;

    return {
      items: updatedItem,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartValue;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartValue
  );

  const addItemsToCart = (items) => {
    dispatchCartAction({ type: "ADD_ITEMS", items: items });
  };

  const removeItemsFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEMS", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemsToCart,
    removeItems: removeItemsFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
