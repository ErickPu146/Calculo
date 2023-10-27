import React from "react";
import {
  Multiplicacion,
  Division,
  PotenciaNumeroElevadoPotencia,
  PotenciaProductoElevadoPotencia,
  PotenciaCocienteElevadoPotencia,
} from "./exercisesOptions";

const FormExerciseExponents = ({ value }) => {
  return (
    <>
      {value === 1 ? (
        <Multiplicacion />
      ) : value === 2 ? (
        <Division />
      ) : value === 3 ? (
        <PotenciaNumeroElevadoPotencia />
      ) : value === 4 ? (
        <PotenciaProductoElevadoPotencia />
      ) : value === 5 ? (
        <PotenciaCocienteElevadoPotencia />
      ) : null}
    </>
  );
};

export { FormExerciseExponents };
