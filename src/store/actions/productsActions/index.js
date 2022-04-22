import { FETCH_PRODUCTS_SUCCESS } from "./actionTypes"

const fetchProductsSuccess = (cards) => { // actionCreator
  return { type: FETCH_PRODUCTS_SUCCESS, payload: cards } // action
}

export const fetchProducts = () => { // async action
  return async (dispatch) => { // dispatch передаётся с помощью redux-thunk
    const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
    const data = await response.json();
    
    dispatch(fetchProductsSuccess(data));
  }
}