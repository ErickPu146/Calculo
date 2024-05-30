import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../home";
import { Exponents } from "../exponents";
import { RemarkableProducts } from "../remarkable-products";
import { Derivatives } from "../derivatives";

const Menu = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exponentes" element={<Exponents />} />
          <Route path="/productos-notables" element={<RemarkableProducts />} />
          <Route path="/derivadas" element={<Derivatives />} />
        </Routes>
      </Router>
    </>
  );
};

export { Menu };
