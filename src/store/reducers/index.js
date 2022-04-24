import { combineReducers } from "redux";
import attributes from "./attributesReducers";
import cart from "./cartReducers";
import products from "./productsReducer";

export default combineReducers({ products, cart, attributes });
