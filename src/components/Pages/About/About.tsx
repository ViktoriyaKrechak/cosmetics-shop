import { useParams } from 'react-router'

import classes from './index.module.scss'

export default function Product() {
  const params = useParams()

  return (
    <div className={classes.about}>
      <div className={classes.title}>About us</div>
      <div className={classes.text}>
      A leader in prestige omni-retail, our mission at BeautyLab is to create a welcoming beauty shopping experience for all and inspire fearlessness in our community. 
      We operate over 2,700 stores in 35 countries worldwide, with an expanding base of over 500 stores across the Americas, and a world-class ecommerce site. 
      Since opening our first US store in New York’s SoHo neighborhood in 1998, BeautyLab has been an industry-leading champion of diversity, inclusivity, and empowerment in the US, guided by our longstanding company values.
      Owned by LVMH Moët Hennessy Louis Vuitton, the world’s leading luxury goods group, BeautyLab was founded in France by Dominique Mandonnaud in 1970 and is defined by its unique, 
      open-sell environment with an ever-increasing assortment of products from carefully curated brands, featuring emerging favorites, trusted classics, and BeautyLab’s own line, BeautyLab Collection. 
      </div>
    </div>
  );

}
