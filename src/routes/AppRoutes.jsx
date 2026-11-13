import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
);

export default AppRoutes;
