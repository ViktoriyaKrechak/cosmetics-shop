import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ProductCard from "../../ProductCard";

import classes from "./index.module.scss";

export default function Favourites() {
  // @ts-ignore
  const { attributes, products } = useSelector(({ attributes, products }) => ({
    attributes,
    products,
  }));

  const favouriteProducts = useMemo(() => {
    const ids = Object.entries(attributes).reduce(
      (array: any, [key, value]: any) =>
        value.favourite ? [...array, key] : array,
      []
    );

    const favProducts = ids.map((id: any) => ({
      ...products.find((product: any) => product.id === +id),
      isFavourite: true,
    }));

    return favProducts;
  }, [products, attributes]);

  return (
    <div className={classes.favourites}>
      <h1 className={classes.title}>Favourites</h1>
      <div className={classes.productList}>
        {favouriteProducts.map((product: any) => (
          //@ts-ignore
          <ProductCard
            key={product.id}
            product={product}
            isFavourite={product.isFavourite}
          />
        ))}
      </div>
    </div>
  );
}
