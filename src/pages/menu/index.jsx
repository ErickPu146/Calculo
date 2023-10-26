import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../home";
import { Exponentes } from "../exponentes";
import { ProductosNotables } from "../productos-notables";

const Menu = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exponentes" element={<Exponentes />} />
          <Route path="/productos-notables" element={<ProductosNotables />} />
        </Routes>
      </Router>
    </>
  );
};

export { Menu };
