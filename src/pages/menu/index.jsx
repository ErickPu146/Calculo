import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../home";
import { Exponents } from "../exponents";
import { RemarkableProducts } from "../remarkable-products";
import { Derivatives } from "../derivatives";
import { Physics } from "../physics2";

const Menu = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exponentes" element={<Exponents />} />
          <Route path="/productos-notables" element={<RemarkableProducts />} />
          <Route path="/derivadas" element={<Derivatives />} />
          <Route path="/fisica2" element={<Physics />} />
        </Routes>
      </Router>
    </>
  );
};

export { Menu };
