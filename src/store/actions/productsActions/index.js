import { getProducts } from "../../../api/productsApi";
import { FETCH_PRODUCTS_SUCCESS } from "./actionTypes";

const fetchProductsSuccess = (cards) => {
  // actionCreator
  return { type: FETCH_PRODUCTS_SUCCESS, payload: cards }; // action
};

export const fetchProducts = (params) => {
  // async action
  return async (dispatch) => {
    // dispatch передаётся с помощью redux-thunk
    const data = await getProducts(params);

    dispatch(fetchProductsSuccess(data));
  };
};
