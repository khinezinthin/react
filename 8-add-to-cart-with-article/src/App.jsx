import React from "react";
import { Route, Routes } from "react-router-dom";
import AddToCart from "./components/AddToCart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Search from "./components/Search";
import Routegaurd from "./components/Routegaurd";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addtocart" element={<AddToCart />} />
        {/* <Route path='/search' element={<Search/>}/> */}
        
        <Route
          path="/search"
          element={
            <Routegaurd>
              <Search />
            </Routegaurd>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
