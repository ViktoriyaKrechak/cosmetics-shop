import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { joinClasses } from "../../../../helpers";
import { updateCartProduct } from "../../../../store/actions/cartActions";
import { UPDATE_CART_PRODUCT } from "../../../../store/actions/cartActions/actionsTypes";
import classes from "./index.module.scss";

export default function Product({ product }) {
  const {
    description: { name, id, price },
    total,
  } = product;

  const dispatch = useDispatch();

  const formattedPrice = useMemo(
    () => (price * total).toFixed(2),
    [price, total]
  );


  const handleUpdateTotal = ({ target }) => {
    dispatch(
      updateCartProduct({
        id,
        total: target.value,
      })
    );
  };

  return (
    <div className={joinClasses(classes.product, !total && classes.disabled)}>
      <div className={joinClasses(classes.title, classes.cell)}>{name}</div>
      <div className={joinClasses(classes.total, classes.cell)}>
        Total:{" "}
        <input
          type="number"
          value={total}
          className={classes.input}
          onChange={handleUpdateTotal}
        />
      </div>
      <div className={joinClasses(classes.cell, classes.price)}>
        Price: {formattedPrice} $
      </div>
    </div>
  );
}
