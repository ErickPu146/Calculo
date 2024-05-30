import React from "react";
import { Link } from "react-router-dom";

const BtnReturnMenu = () => {
  return (
    <>
      <Link to="/">
        <button className="action register">
          <i className="bi bi-caret-left-fill"></i>
          <i className="bi bi-caret-left-fill"></i>Regresar al menú
        </button>
      </Link>
    </>
  );
};

export { BtnReturnMenu };
