import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
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
          <Route path='/about' element={<About />}></Route>
          <Route path='/vans' element={<Vans />}></Route>
          <Route path='/vans/:id' element={<Product />}></Route>
          <Route path='/host' element={<HostLayout />}>
            <Route path='/host/income' element={<Income />}></Route>
            <Route path='/host/reviews' element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
