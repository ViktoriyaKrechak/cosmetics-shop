import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProducts } from "../../../api/productsApi";
import { PRODUCT_TYPE_WHITELIST } from "./consts";


import classes from "./index.module.scss";

export default function Brand() {
  const [products, setProducts] = useState();
  const params = useParams();

  useEffect(() => {
    (async () => {
      const data = await getProducts({ brand: params.brand });
      const transformed = data.reduce(
        (products, product
        ) => {
          if (PRODUCT_TYPE_WHITELIST.includes(product.product_type)) {
            products[product.product_type] ??= [];
            products[product.product_type] = [...products[product.product_type], product];
          }

          return products;
        },
        {}
      );

      setProducts(transformed);
      const product_type = 'mascara';
    })();
  }, []);
  return products ? (
    <div className={classes.container}>
      <section className={classes.brand}>
      <nav className={classes.menu}>
        <input type="checkbox" href='#' className={classes.menu_open} name='menu_open' id='menu_open' />
        <label className={classes.menu_open_button} for='menu_open'>
          <h1 className={classes.title}>{params.brand}</h1>
        </label>
        {PRODUCT_TYPE_WHITELIST.map((product_type) => (
          <a href='#{ product_type }' key={PRODUCT_TYPE_WHITELIST} className={classes.menu_item} id={ product_type }> { product_type } </a>
        ))}
      </nav>
      </section>
      <section className={classes.product_types}>
        {Object.entries(products).map(([key, value]) => (
          <div key={key} className={classes.product_type} id={ key }>
            <p className={classes.productTypeTitle}>{key}</p>
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
