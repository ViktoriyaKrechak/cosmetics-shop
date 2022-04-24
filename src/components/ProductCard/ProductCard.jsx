import React from "react";
import { useDispatch } from "react-redux";
import { updateAttributes } from "../../store/actions/attributesActions";
import { addToCart } from "../../store/actions/cartActions";
import classes from "./index.module.scss";

export default function ProductCard({ product, isFavourite, isInBusket }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => dispatch(addToCart({ product }));
  const handleAddToFavourites = () =>
    dispatch(
      updateAttributes({
        id: product.id,
        favourite: !isFavourite,
        inBusket: !isInBusket,
      })
    );

  return (
    <div className={classes.productWrap}>
      <div className={classes.product_buttons}>
        <button className={classes.button} onClick={handleAddToCart} isInBusket={product.isInBusket}>
        {isInBusket ? "Remove from Busket" : "Add to Busket"} 
        </button>
        <button className={classes.button} onClick={handleAddToFavourites} isFavourite={product.isFavourite}>
          {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
        </button>
      </div>
      <div className={classes.product_item}>
        <div className={classes.imageWrapper}>
          <img src={product.image_link} alt="product" />
        </div>
        <div className={classes.colors}>
          {product.product_colors.map((color) => (
            <div
              key={color.colour_name}
              className={classes.color}
              style={{ background: color.hex_value }}
            >
              {" "}
            </div>
          ))}
        </div>
        <p className={classes.name}>{product.name}</p>
        <p className={classes.price}>Price: {product.price} $ </p>
      </div>
    </div>
  );
}
