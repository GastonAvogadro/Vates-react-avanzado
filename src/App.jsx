import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./screens/Home";
import Category from "./screens/Category";
import Navbar from "./components/Navbar";
import Cart from "./screens/Cart";
import Detail from "./screens/Detail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:idCategory" element={<Category />} />
          <Route path="/detail/:idProduct" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div>Not Found 404</div>} />
        </Routes>

        {/* Footer */}
        
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
