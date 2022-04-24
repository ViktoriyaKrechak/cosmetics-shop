import { ADD_TO_CART, UPDATE_CART_PRODUCT } from "./actionsTypes";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const updateCartProduct = (payload) => ({
  type: UPDATE_CART_PRODUCT,
  payload,
});
