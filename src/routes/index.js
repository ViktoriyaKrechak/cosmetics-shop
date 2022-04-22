import Layout from "../components/Layout";
import Contacts from "../components/Pages/Contacts";
import Main from "../components/Pages/Main";
import Product from "../components/Pages/Product";
import Brand from "../components/Pages/Brand";
import About from "../components/Pages/About";

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
      }
    ]
  }
]