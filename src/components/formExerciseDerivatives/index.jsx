import React from "react";
import {
  BasicDerivative,
  Division,
  PotenciaNumeroElevadoPotencia,
  PotenciaProductoElevadoPotencia,
  PotenciaCocienteElevadoPotencia,
} from "./exercisesOptions";

const FormExerciseDerivatives = ({ value }) => {
  return (
    <>
      {value === 1 ? (
        <BasicDerivative />
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

export { FormExerciseDerivatives };
