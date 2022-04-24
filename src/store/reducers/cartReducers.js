import {
  ADD_TO_CART,
  UPDATE_CART_PRODUCT,
} from "../actions/cartActions/actionsTypes";
import initialStore from "../initialStore";

export default function cartReducer(
  state = initialStore.cart,
  { type, payload }
) {
  switch (type) {
    case ADD_TO_CART:
      const productId = payload.product.id;

      return {
        products: {
          ...state.products,
          [productId]: {
            total: state.products[productId]
              ? state.products[productId].total + 1
              : 1,
            description: payload.product,
          },
        },
      };
    case UPDATE_CART_PRODUCT:
      const { id, total } = payload;

      return {
        products: {
          ...state.products,
          [id]: {
            ...state.products[id],
            total: +total >= 0 ? +total : state.products[id].total,
          },
        },
      };
    default:
      return state;
  }
}
