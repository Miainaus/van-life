import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Host from "./pages/Host/Host";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Vans from "./pages/ListPage/Vans";
import Product from "./pages/Product/Product";
import "./server.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/host' element={<Host />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/vans' element={<Vans />}></Route>
          <Route path='/vans/:id' element={<Product />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
