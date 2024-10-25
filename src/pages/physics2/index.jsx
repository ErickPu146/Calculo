import React, { useState, useContext } from "react";
import { BtnReturnMenu } from "../../components/btnReturnMenu";
import { Col, Row, Container } from "react-bootstrap";
import { ContentContext } from "../../context";
import "./style.css";

const Physics = () => {
  const { calculatePhysicExercise } = useContext(ContentContext);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [inputs, setInputs] = useState({});
  const [visualizationData, setVisualizationData] = useState(null);
  const [result, setResult] = useState(null);

  const showUI = (id) => {
    setSelectedExercise(id);
    setInputs({}); // Limpiar las entradas al cambiar de ejercicio
    setResult(null); // Limpiar el resultado al cambiar de ejercicio
    setVisualizationData(null); // Limpiar la visualización al cambiar de ejercicio
  };

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (exerciseId) => {
    // Validar que los inputs estén presentes según el ejercicio
    let isValid = true;
    switch (exerciseId) {
      case 1: // Carga y fuerza eléctrica
        const { q1, q2, r } = inputs;
        isValid = q1 && q2 && r;
        break;
      case 2: // Capacitancia
        const { area, d } = inputs;
        isValid = area && d;
        break;
      case 3: // Ley de Ohm
        const { v, i, resistencia } = inputs;
        isValid = (v && i) || (v && resistencia) || (i && resistencia);
        break;
      default:
        isValid = false;
    }

    if (!isValid) {
      alert('Por favor ingrese todos los valores requeridos.');
      return;
    }

    // Convertir las entradas en números según el ejercicio
    const q1Value = parseFloat(inputs.q1);
    const q2Value = parseFloat(inputs.q2);
    const rValue = parseFloat(inputs.r);
    const areaValue = parseFloat(inputs.area);
    const dValue = parseFloat(inputs.d);
    const vValue = parseFloat(inputs.v);
    const iValue = parseFloat(inputs.i);
    const resistenciaValue = parseFloat(inputs.resistencia);

    // Calcular el resultado con calculatePhysicExercise
    const result = calculatePhysicExercise(exerciseId, {
      q1: q1Value,
      q2: q2Value,
      r: rValue,
      area: areaValue,
      d: dValue,
      v: vValue,
      i: iValue,
      resistencia: resistenciaValue,
    });
    setResult(result);
    
    // Configurar los datos de la visualización (solo para el primer ejercicio)
    if (exerciseId === 1) {
      setVisualizationData({
        q1Value,
        q2Value,
        rValue,
      });
    }
  };

  const getSign = (charge) => (charge > 0 ? "+" : "-");

  return (
    <div className="derivativesContainer text-light">
      <Container className="pt-5 d-flex flex-column align-items-center">
        <Row className="row-gap-4">
          <Col md={12}>
            <BtnReturnMenu />
          </Col>
          <Col md={12}>
            <h2 className="text-center py-2">
              EJERCICIOS DE FÍSICA 2
            </h2>
          </Col>
          <Col md={12} className="mt-3">
            <h3 className="text-center">Temas:</h3>
            <Row className="g-3 pt-3">
              <Col md={4}>
                <button
                  className={`action-de rounded-1 one`}
                  onClick={() => showUI(1)}
                >
                  <p className="fw-bolder">Carga y fuerza eléctrica</p>
                </button>
              </Col>
              <Col md={4}>
                <button
                  className={`action-de rounded-1 one`}
                  onClick={() => showUI(2)}
                >
                  <p className="fw-bolder">Capacitancia y Materiales Dieléctricos</p>
                </button>
              </Col>
              <Col md={4}>
                <button
                  className={`action-de rounded-1 one`}
                  onClick={() => showUI(3)}
                >
                  <p className="fw-bolder">Ley de Ohm</p>
                </button>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Mostrar el formulario según el ejercicio seleccionado */}
        {selectedExercise === 1 && (
          <Row className="mt-5">
            <Col md={12}>
              <h3 className="text-center">Ingresar datos:</h3>
              <form>
                <label>Carga 1 (μC):</label>
                <input type="number" name="q1" onChange={handleInputChange} />
                <label>Carga 2 (μC):</label>
                <input type="number" name="q2" onChange={handleInputChange} />
                <label>Distancia entre las cargas (m):</label>
                <input type="number" name="r" onChange={handleInputChange} />
                <button type="button" onClick={() => handleSubmit(1)}>
                  Calcular
                </button>
                <p>Resultado de fuerza eléctrica: {result}</p>
              </form>
            </Col>
          </Row>
        )}

        {selectedExercise === 2 && (
          <Row className="mt-5">
            <Col md={12}>
              <h3 className="text-center">Ingresar datos:</h3>
              <form>
                <label>Área de las placas (m²):</label>
                <input type="number" name="area" onChange={handleInputChange} />
                <label>Distancia entre las placas (m):</label>
                <input type="number" name="d" onChange={handleInputChange} />
                <button type="button" onClick={() => handleSubmit(2)}>
                  Calcular
                </button>
                <p>Resultado de capacitancia: {result}</p>
              </form>
            </Col>
          </Row>
        )}

        {selectedExercise === 3 && (
          <Row className="mt-5">
            <Col md={12}>
              <h3 className="text-center">Ingresar datos:</h3>
              <form>
                <label>Voltaje (V):</label>
                <input type="number" name="v" onChange={handleInputChange} />
                <label>Corriente (A):</label>
                <input type="number" name="i" onChange={handleInputChange} />
                <label>Resistencia (Ω):</label>
                <input type="number" name="resistencia" onChange={handleInputChange} />
                <button type="button" onClick={() => handleSubmit(3)}>
                  Calcular
                </button>
                <p>Resultado de Ley de Ohm: {result}</p>
              </form>
            </Col>
          </Row>
        )}

        {/* Mostrar la visualización si los datos están disponibles */}
        {visualizationData && (
          <Row className="mt-5">
            <Col md={12}>
              <h3 className="text-center text-white">Visualización de las Cargas:</h3>
              <div className="d-flex justify-content-center">
                <svg width="400" height="200">
                  {/* Carga 1 */}
                  <circle cx="100" cy="100" r="30" fill={visualizationData.q1Value > 0 ? "red" : "blue"} />
                  <text x="100" y="105" fontSize="20" textAnchor="middle" fill="white">
                    {getSign(visualizationData.q1Value)}
                  </text>

                  {/* Carga 2 */}
                  <circle cx="300" cy="100" r="30" fill={visualizationData.q2Value > 0 ? "red" : "blue"} />
                  <text x="300" y="105" fontSize="20" textAnchor="middle" fill="white">
                    {getSign(visualizationData.q2Value)}
                  </text>

                  {/* Línea punteada que representa la distancia */}
                  <line x1="130" y1="100" x2="270" y2="100" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                  <text x="200" y="90" fontSize="16" textAnchor="middle" fill="white">
                    {`Distancia: ${visualizationData.rValue} m`}
                  </text>
                </svg>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export { Physics };
