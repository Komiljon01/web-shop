import { Route, Routes } from "react-router-dom";
import "./styles/main.scss";

// Pages
import Home from "./pages/home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
