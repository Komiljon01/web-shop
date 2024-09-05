import { Route, Routes } from "react-router-dom";
import "./styles/main.scss";

// Pages
import Home from "./pages/home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Navbar from "./components/navbar";
import Product from "./pages/product";

function App() {
  return (
    <div>
      <Navbar />
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
