import { createContext, useState } from "react";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [resultadoMulti, setResultadoMulti] = useState();
  const [resultadoDivision, setResultadoDivision] = useState();
  const [resultadoPotenciaDePotencia, setResultadoPotenciaDePotencia] = useState();
  const [resultadoPotenciaProducto, setResultadoPotenciaProducto] = useState();
  const [resultadoPotenciaCociente, setResultadoPotenciaCociente] = useState();
  const [resultadoBinomioCuadradoPerfecto, setResultadoBinomioCuadradoPerfecto] = useState();
  const [resultadoDiferenciaBinomioCuadradoPerfecto, setResultadoDiferenciaBinomioCuadradoPerfecto] = useState();
  const [resultadoProductoSumaDiferencia, setProductoSumaDiferencia] = useState();

  const multiplicacionExponentes = (base1, exponente1, base2, exponente2) => {
    if(base1 === base2){
      let resultadoBase = base1;
      let resultadoExponente = exponente1 + exponente2;
      let resultado = resultadoBase ** resultadoExponente;
      setResultadoMulti(`Resultado: ${resultadoBase}^${resultadoExponente} = ${resultado}`);
    }else{
      let resultadoBase1 = base1 ** exponente1;
      let resultadoBase2 = base2 ** exponente2;
      let resultado = resultadoBase1 * resultadoBase2;
      setResultadoMulti(`Resultado: (${base1}^${exponente1}) * (${base2}^${exponente2}) = ${resultado}`);
    }
  };  

  const divisionExponentes = (base_numerador, exponente_numerador, base_denominador, exponente_denominador) => {
    if(base_numerador === base_denominador){
        let resultado_base = base_numerador
        let resultado_exponente = exponente_numerador - exponente_denominador
        let resultado = resultado_base ** resultado_exponente
        setResultadoDivision(`Resultado: ${resultado_base}^${resultado_exponente} = ${resultado}`)
    }else{
        let resultado_base_numerador = base_numerador ** exponente_numerador
        let resultado_base_denominador = base_denominador ** exponente_denominador
        let resultado = resultado_base_numerador / resultado_base_denominador
        setResultadoDivision(`Resultado: (${base_numerador}^${exponente_numerador}) / (${base_denominador}^${exponente_denominador}) = ${resultado}`)
    }
  };

  const potenciaDePotencia = (base, exponente1, exponente2) => {
    let resultado_base = base ** (exponente1 * exponente2)
    let resultado_exponente = exponente1 * exponente2
    setResultadoPotenciaDePotencia(`Resultado: (${base}^${exponente1})^${exponente2} = ${base}^${resultado_exponente} = ${resultado_base}`)
  };

  const potenciaDeProducto = (base1, base2, exponente) => {
    let resultado_base1 = base1 ** exponente
    let resultado_base2 = base2 ** exponente
    let resultado = resultado_base1 * resultado_base2
    setResultadoPotenciaProducto(`Resultado: (${base1}^${exponente}) * (${base2}^${exponente}) = ${resultado}`)
  };

  const potenciaDeCociente = (numerador, denominador, exponente) => {
    let resultado_numerador = numerador ** exponente
    let resultado_denominador = denominador ** exponente
    let resultado = resultado_numerador / resultado_denominador
    setResultadoPotenciaCociente(`Resultado: (${numerador}^${exponente}) / (${denominador}^${exponente}) = ${resultado}`)
  }

  //Productos Notables

  const binomioCuadradoPerfecto = (a, b) => {
    let resultado = (a + b) ** 2;
    setResultadoBinomioCuadradoPerfecto(`El cuadrado de la suma de ${a} y ${b} es: ${resultado}`)
  }

  const diferenciaBinomioCuadradoPerfecto = (a,b) => {
    let resultado = (a - b) ** 2;
    setResultadoDiferenciaBinomioCuadradoPerfecto(`El cuadrado de la diferencia de ${a} y ${b} es: ${resultado}`)
  }

  const productoSumaDiferenciaDosTerminos = (a,b) => {
    let resultado = (a + b) * (a - b);
    setProductoSumaDiferencia(`El producto de la suma por la diferencia de ${a} y ${b} es: ${resultado}`)
  }

  const value = {
    multiplicacionExponentes,
    resultadoMulti,
    setResultadoMulti,
    //division de Exponentes
    divisionExponentes,
    resultadoDivision,
    setResultadoDivision,
    //potencia De Potencia
    potenciaDePotencia,
    resultadoPotenciaDePotencia,
    setResultadoPotenciaDePotencia,
    //potencia De Producto
    potenciaDeProducto,
    resultadoPotenciaProducto,
    setResultadoPotenciaProducto,
    //potencia De Cociente
    potenciaDeCociente,
    resultadoPotenciaCociente,
    setResultadoPotenciaCociente,
    //binomio Cuadrado Perfecto
    binomioCuadradoPerfecto,
    resultadoBinomioCuadradoPerfecto,
    setResultadoBinomioCuadradoPerfecto,
    //diferencia de binomio al cuadrado perfecto
    diferenciaBinomioCuadradoPerfecto,
    resultadoDiferenciaBinomioCuadradoPerfecto,
    setResultadoDiferenciaBinomioCuadradoPerfecto,
    //Producto de Suma de diferencia de dos terminos
    productoSumaDiferenciaDosTerminos,
    resultadoProductoSumaDiferencia,
    setProductoSumaDiferencia,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
