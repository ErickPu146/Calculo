// Constante de Coulomb
const k = 9e9; // N m² / C²
const epsilon_0 = 8.854e-12; // Constante de permitividad eléctrica (F/m)

export const physicContext = () => {
  
  // Calcular Fuerza Eléctrica, Campo Eléctrico, Capacitancia, Ley de Ohm
  const calculatePhysicExercise = (exerciseId, inputs) => {
    let resultado;

    switch (exerciseId) {
      case 1: // Carga y fuerza eléctrica (Ley de Coulomb)
        const { q1, q2, r } = inputs;
        if (q1 && q2 && r) {
          const c1 = q1 * 1e-6
          const c2 = q2 * 1e-6
          const fuerza = (k * c1 * c2) / (r ** 2);
          resultado = fuerza;
        } else {
          resultado = "Por favor, ingrese todas las entradas para el cálculo.";
        }
        break;

      case 2: // Capacitancia de un condensador de placas paralelas
        const { area, d } = inputs;
        if (area && d) {
          const capacitancia = (epsilon_0 * area) / d;
          resultado = capacitancia;
        } else {
          resultado = "Por favor, ingrese el área y la distancia entre las placas.";
        }
        break;

      case 3: // Ley de Ohm
        const { v, i, r: resistencia } = inputs;
        if (v && i) {
          const resistenciaCalculada = v / i;
          resultado = `Resistencia: ${resistenciaCalculada} Ω`;
        } else if (v && resistencia) {
          const corriente = v / resistencia;
          resultado = `Corriente: ${corriente} A`;
        } else if (i && resistencia) {
          const voltaje = i * resistencia;
          resultado = `Voltaje: ${voltaje} V`;
        } else {
          resultado = "Por favor, ingrese al menos dos valores (voltaje, corriente o resistencia).";
        }
        break;

      default:
        resultado = "Ejercicio no reconocido.";
        break;
    }

    return resultado;  // Devuelve el resultado del cálculo
  };

  return {
    calculatePhysicExercise,
  };
};
