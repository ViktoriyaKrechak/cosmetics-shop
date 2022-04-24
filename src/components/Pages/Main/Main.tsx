import { NavLink } from "react-router-dom";
import classes from "./main.module.scss";
import lips from "../../../img/lips.png";
import beauty from "../../../img/beauty.jpg";
import skinCare from "../../../img/SkinCareLabels.jpg";

import pot from "../../../img/single-pot.png";

import loreal from "../../../img/brands/l-oreal-paris.svg";
import clinique from "../../../img/brands/logo-clinique.png";
import maybelline from "../../../img/brands/maybelline.png";
import nyx from "../../../img/brands/nyx.png";
import { PRODUCT_TYPES } from "../../../consts/cards";

const BRANDS = [
  {
    name: "clinique",
    img: clinique,
  },
  {
    name: "l'oreal",
    img: loreal,
  },
  {
    name: "maybelline",
    img: maybelline,
  },
  {
    name: "nyx",
    img: nyx,
  },
];

export default function Main() {
  // @ts-ignore

  return (
    <div className={classes.firstscreen}>
      <section className={classes.imgs}>
        <div className={classes.wrap_skinCare}>
          <img src={skinCare} alt={"skinCare"} className={classes.img_skinCare} /> 
        </div>
        <div className={classes.wrap_lips}>
          <img src={lips} alt={"lips"} className={classes.img_lips} />
        </div>
        <div className={classes.wrap_beauty}>
          <img src={beauty} alt={"beauty-img"} className={classes.img_beauty} />
        </div>
      </section>
      <section className={classes.products}>
        <h2 className={classes.title}>Click to choose the product</h2>
        <div className={classes.bg_products}>
          <img src={pot} alt={"pot"} className={classes.img_pot} />
          <div className={classes.list_products}>
            {PRODUCT_TYPES.map((product: any) => (
              <li key={product.type} className={classes.product_item}>
                <NavLink
                  to={`/products/${product.type}`}
                  className={classes.link}
                >
                  {" "}
                  {product.type}{" "}
                </NavLink>
              </li>
            ))}
          </div>
        </div>
      </section>
      <section className={classes.brands}>
        <h2 className={classes.title}>Click to choose the brand</h2>
        <div className={classes.list_brands}>
          {BRANDS.map(({ name, img }: any) => (
            <div key={name} className={classes.brand_item}>
              <NavLink to={`/brands/${name}`} className={classes.link_brand}>
                <img className={classes.img_brand} src={img} alt={name} />
              </NavLink>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
