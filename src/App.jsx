import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./screens/Home";
import Category from "./screens/Category";
import Navbar from "./components/Navbar";
import Login from "./screens/Login";
import Cart from "./screens/Cart";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias/:idCategory" element={<Category />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div>Not Found 404</div>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
