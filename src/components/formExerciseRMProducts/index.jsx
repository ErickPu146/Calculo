import React from "react";
import {
  CuadradoSuma,
  CuadradoDiferencia,
  ProductoSumaPorDiferencia,
} from "./exercisesOptions";

const FormExerciseRMProducts = ({ value }) => {
  return (
    <>
      {value === 1 ? (
        <CuadradoSuma />
      ) : value === 2 ? (
        <CuadradoDiferencia />
      ) : value === 3 ? (
        <ProductoSumaPorDiferencia />
      ) : null}
    </>
  );
};

export { FormExerciseRMProducts };
