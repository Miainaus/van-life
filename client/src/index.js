import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Vans from "./pages/Vans/Vans";

function App() {
  // const [data, setData] = React.useState(null);
  // React.useEffect(() => {
  //   fetch("http://localhost:3001/api")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <BrowserRouter>
      <div>
        <nav className='header'>
          <h2>#VANLIFE</h2>
          <div className='links'>
            <Link to='/about'>About</Link>
            <Link to='/vans'>Vans</Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/vans' element={<Vans />}></Route>
        </Routes>
        <div className='footer'>© 2023 #VANLIFE ❤️</div>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
