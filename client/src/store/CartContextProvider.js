import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartValue = {
  items: [],
  totalAmount: 0,
};

// @desc: reducer function for useReducer
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEMS") {
    const updatedTotalAmount =
      state.totalAmount + action.items.price * action.items.amount;

    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.items.id
    );
    const existingCartItems = state.items[existingCartItemsIndex];

    let updatedItem;

    if (existingCartItems) {
      const updateItems = {
        ...existingCartItems,
        amount: existingCartItems.amount + action.items.amount,
      };
      updatedItem = [...state.items];
      updatedItem[existingCartItemsIndex] = updateItems;
    } else {
      updatedItem = state.items.concat(action.items);
    }

    return {
      items: updatedItem,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEMS") {
    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItems = state.items[existingCartItemsIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItems.price;

    let updatedItems;

    if (existingCartItems.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItems,
        amount: existingCartItems.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemsIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR_CART") {
    return defaultCartValue;
  }

  return defaultCartValue;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartValue
  );

  const addItemsToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEMS", items: item });
  };

  const removeItemsFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEMS", id: id });
  };

  const clearItemsFromCart = () => {
    dispatchCartAction({ type: 'CLEAR_CART' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemsToCart,
    removeItems: removeItemsFromCart,
    clearCart: clearItemsFromCart
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
