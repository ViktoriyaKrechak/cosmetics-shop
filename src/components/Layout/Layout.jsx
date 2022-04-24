import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { getProducts } from "../../api/productsApi";
import { fetchProducts } from "../../store/actions/productsActions";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchProducts({ rating_greater_than: 3 }));
    })();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
