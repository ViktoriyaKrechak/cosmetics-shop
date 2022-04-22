import { FETCH_PRODUCTS_SUCCESS } from "../actions/productsActions/actionTypes";
import initialStore from "../initialStore";

export default function CardsReducer(state = initialStore.products, { type, payload }) {
  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return payload;
    default:
      return state;
  }
}