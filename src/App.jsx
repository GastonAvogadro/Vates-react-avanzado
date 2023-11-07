import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Category from "./screens/Category";
import Navbar from "./components/Navbar";

import "./App.css";
import Login from "./screens/Login";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias/:idCategory" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>Not Found 404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
