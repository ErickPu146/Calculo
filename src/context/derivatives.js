import { derivative, simplify } from "mathjs";

export const derivativeContext = () => {
  const handleImplicitDerivative = (expression) => {
    try {
      const [left, right] = expression.split("=").map((part) => part.trim());

      const dLeft = derivative(left, "x").toString();
      const dRight = derivative(right, "x").toString();

      const implicitDerivative = `(${dLeft}) - (${dRight})`;

      const simplified = simplify(implicitDerivative);

      return simplified.toString();
    } catch (error) {
      return "Error";
    }
  };

  const handleDerivative = (expression) => {
    try {
      const result = derivative(expression, "x").toString();

      return result;
    } catch (error) {
      return "Error";
    }
  };

  const calculateDerivative = (expression, isImplicit = false) => {
    if (isImplicit) {
      return handleImplicitDerivative(expression);
    }
    return handleDerivative(expression);
  };

  return {
    calculateDerivative,
  };
};





