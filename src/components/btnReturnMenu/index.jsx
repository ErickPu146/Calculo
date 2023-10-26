import React from "react";
import { Link } from "react-router-dom";

const BtnReturnMenu = () => {
  return (
    <>
      <Link to="/">
        <button className="action register">
          <i class="bi bi-caret-left-fill"></i>
          <i class="bi bi-caret-left-fill"></i>Regresar
        </button>
      </Link>
    </>
  );
};

export { BtnReturnMenu };
