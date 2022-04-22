import { NavLink } from 'react-router-dom';
import classes from './main.module.scss';
import lips from '../../../img/lips.png';
import beauty from '../../../img/beauty.jpg';
import skinCare from '../../../img/SkinCareLabels.jpg';

import pot from '../../../img/single-pot.png'

import loreal from '../../../img/brands/l-oreal-paris.png';
import clinique from '../../../img/brands/logo-clinique.svg';
import maybelline from '../../../img/brands/maybelline.png';
import nyx from '../../../img/brands/nyx.png';
import { PRODUCT_TYPES } from '../../../consts/cards';

export default function Main() {
  // @ts-ignore
  const brands = ["clinique", "l\'oreal", "maybelline", "nyx"];

  return (
    <div className={classes.firstscreen}>
        <section className={classes.imgs}>
          <img src={skinCare} alt={'skinCare'} className={classes.img_skinCare}/>
          <img src={lips} alt={'lips'} className={classes.img_lips}/>
          <img src={beauty} alt={'beauty-img'} className={classes.img_beauty}/>
        </section>
        <section className={classes.products}>
            <h2 className={classes.title}>Click to choose the product</h2>
            <div className={classes.bg_products}>
              <img src={pot} alt={'pot'} className={classes.img_pot}/>
              <div className={classes.list_products}>
              {PRODUCT_TYPES.map((product: any) => (  
                <li key={product.type} className={classes.product_item}>
                  <NavLink to={`/products/${product.type}`} className={classes.link}> { product.type } </NavLink>
                </li>
              ))}
              </div>
            </div>
        </section>
        <section className={classes.certificates}>
          <h2 className={classes.title}>Certificates</h2>
        </section>
        <section className={classes.brands}>
            <h2 className={classes.title}>Click to choose the brand</h2>
              <div className={classes.list_brands}>
              {brands.map((brand: any) => ( 
              <li key={brand} className={classes.product_item}>
                <NavLink to={`/brands/${brand}`} className={classes.link}> { brand } </NavLink>
              </li>
              ))}
            </div>
        </section>
        </div>
  )
}
