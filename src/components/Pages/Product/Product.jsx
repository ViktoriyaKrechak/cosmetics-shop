import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProducts } from "../../../api/productsApi";
import { BRANDS_WHITELIST } from "./consts";

import beauty from '../../../img/beauty.jpg';
import eyeshadow from '../../../img/eyeshadow.png';

import classes from "./index.module.scss";

export default function Product() {
  const [products, setProducts] = useState();
  const params = useParams();

  useEffect(() => {
    (async () => {
      const data = await getProducts({ product_type: params.product_type });
      const transformed = data.reduce(
        (products, product
        ) => {
          if (BRANDS_WHITELIST.includes(product.brand)) {
            products[product.brand] ??= [];
            products[product.brand] = [...products[product.brand], product];
          }

          return products;
        },
        {}
      );

      setProducts(transformed);
    })();
  }, []);
  return products ? (
    <div className={classes.container}>
      <section className={classes.product_type}>
      <h1 className={classes.title}>{params.product_type}</h1>
      </section>
      <section className={classes.brands}>
        {Object.entries(products).map(([key, value]) => (
          <div key={key} className={classes.brand}>
            <p className={classes.brandTitle}>{key}</p>
            <div className={classes.products_list}>
              {value.map((product) => (
                <div className={classes.productWrap}>
                  <div className={classes.product_buttons}>
                      <a href="" className={classes.buttonBusket}>Add to Busket</a>
                      <a href="" className={classes.buttonLoves}>Add to Loves</a>
                  </div>
                  <div className={classes.product_item}>
                    <div className={classes.imageWrapper}>
                      <img src={product.image_link} alt="product" />
                    </div> 
                    <div className={classes.colors}>
                      {product.product_colors.map((color) => (
                        <div key={color.colour_name} className={classes.color} style={{ background: color.hex_value}}> </div>
                      ))}
                    </div>                
                    <p className={classes.name}>{product.name}</p>
                    <p className={classes.price}>Price: {product.price} $ </p>
                  </div>
                </div>
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
