import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProducts } from "../../../api/productsApi";
import ProductCard from "../../ProductCard";
import { PRODUCT_TYPE_WHITELIST } from "./consts";

import classes from "./index.module.scss";

export default function Brand() {
  const [products, setProducts] = useState();
  
  const params = useParams();

  useEffect(() => {
    (async () => {
      const data = await getProducts({ 
        brand: params.brand,
      });
      const transformed = data.reduce((products, product) => {
        if (PRODUCT_TYPE_WHITELIST.includes(product.product_type)) {
          products[product.product_type] ??= [];
          products[product.product_type] = [
            ...products[product.product_type],
            product,
          ];
        }

        return products;
      }, {});

      setProducts(transformed);
    })();
  }, []);

  return products ? (
    <div className={classes.container}>
      <section className={classes.brand}>
        <h1 className={classes.title}>{params.brand}</h1>
      </section>
      <section className={classes.product_types}>
        {Object.entries(products).map(([key, value]) => (
          <div key={key} className={classes.product_type} id={key}>
            <p className={classes.productTypeTitle}>{key}</p>
            <div className={classes.products_list}>
              {value.map((product) => (
                <ProductCard key={product.id} product={product} isFavourite={product.isFavourite}/>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  ) : (
    "Loading..."
  );
}
