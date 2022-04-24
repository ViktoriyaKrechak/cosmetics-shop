import Layout from "../components/Layout";
import Main from "../components/Pages/Main";
import Product from "../components/Pages/Product";
import Brand from "../components/Pages/Brand";
import About from "../components/Pages/About";
import Cart from "../components/Pages/Cart";
import Favourites from "../components/Pages/Favourites";

export default [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: 'brands/:brand',
        element: <Brand />
      },
      {
        path: 'products/:product_type',
        element: <Product />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'favourites',
        element: <Favourites />
      }
    ]
  }
]