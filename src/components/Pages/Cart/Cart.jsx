import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import Button from "../../Button";

import classes from "./index.module.scss";

export default function Cart() {
  const cart = useSelector(({ cart }) => cart);
  return (
    <div className={classes.cart}>
      <div className={classes.title}>Cart</div>
      <div className={classes.products}>
        {Object.entries(cart.products).map(([key, product]) => (
          <div className={classes.product}>
            <Product key={product.id} product={product} />
          </div>
        ))}
      </div>
      <div className={classes.actions}>
        <Button>Order</Button>
      </div>
    </div>
  );
}
