import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProducts } from "../../../api/productsApi";
import { addToCart } from "../../../store/actions/cartActions";
import ProductCard from "../../ProductCard";
import { BRANDS_WHITELIST } from "./consts";

import beauty from "../../../img/beauty.jpg";
import eyeshadow from "../../../img/eyeshadow.png";

import classes from "./index.module.scss";

export default function Product() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState();
  const params = useParams();

  const productType = useMemo(
    () => params.product_type.replace(/_/g, " "),
    [params.product_type]
  );

  useEffect(() => {
    (async () => {
      const data = await getProducts({
        product_type: params.product_type,
        rating_greater_than: 3,
      });
      const transformed = data.reduce((products, product) => {
        if (BRANDS_WHITELIST.includes(product.brand)) {
          products[product.brand] ??= [];
          products[product.brand] = [...products[product.brand], product];
        }

        return products;
      }, {});

      setProducts(transformed);
    })();
  }, []);

  return products ? (
    <div className={classes.container}>
      <section className={classes.product_type}>
        <h1 className={classes.title}>{productType}</h1>
      </section>
      <section className={classes.brands}>
        {Object.entries(products).map(([key, value]) => (
          <div key={key} className={classes.brand}>
            <p className={classes.brandTitle}>{key}</p>
            <div className={classes.products_list}>
              {value.map((product) => (
                <ProductCard key={product.id} product={product} />
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
