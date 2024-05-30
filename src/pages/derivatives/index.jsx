import React, { useState, useContext } from "react";
import AOS from "aos";
import { BtnReturnMenu } from "../../components/btnReturnMenu";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { ContentContext } from "../../context";
import "./style.css";

AOS.init();

const Derivatives = () => {
  const { calculateDerivative } = useContext(ContentContext);

  const [resultDerivative, setResultDerivative] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleButtonMathClick = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonSubmit = async (expression, implicit = false) => {
    if (implicit) {
      setResultDerivative(await calculateDerivative(expression, true));
    } else {
      setResultDerivative(await calculateDerivative(expression));
    }
  };

  const handleSubmitExample = async (expresion, implicit = false) => {
    setInputValue(expresion);
    if (implicit) {
      setResultDerivative(await calculateDerivative(expresion, true));
    } else {
      setResultDerivative(await calculateDerivative(expresion));
    }
  };

  const cleanInputs = () => {
    setInputValue("");
    setResultDerivative("");
  };

  const exercises = [
    { id: 1, function: "12x^5", label: "Derivadas básicas" },
    {
      id: 2,
      function: "5x^3 + 3x - 6x^4 + 3",
      label: "Derivadas de sumas y restas",
    },
    { id: 3, function: "x^2 * sin(x)", label: "Derivadas de producto" },
    { id: 4, function: "(x^2 + 1) / (x + 2)", label: "Derivadas de cocientes" },
    { id: 5, function: "sin(2x + 3)", label: "Regla de la cadena" },
    { id: 6, function: "sin(x) + cos(x)", label: "Derivadas trigonométricas" },
    { id: 7, function: "x^2 + y^2 = 1", label: "Derivadas Implícitas" },
    { id: 8, function: "log(x^2 + 1)", label: "Derivadas logarítmicas" },
    { id: 9, function: "e^(x^2 + 2x + 1)", label: "Derivadas exponenciales" }
  ];

  return (
    <>
      <div className="derivativesContainer text-light">
        <Container className="pt-5 d-flex flex-column align-items-center">
          <Row className="row-gap-4">
            <Col md={12}>
              <BtnReturnMenu />
            </Col>
            <Col data-aos="fade-down" data-aos-duration="700" md={12}>
              <h2 className="text-center shadowSubtitleDark py-2">
                CALCULADORA DE DERIVADAS
              </h2>
            </Col>
            <Col
              data-aos="fade-right"
              data-aos-duration="700"
              md={7}
              className="mt-3"
            >
              <div className="mb-3">
                <Row className="g-1">
                  <Col md={1}>
                    <Button
                      variant="warning"
                      size="lg"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonMathClick("+")}
                    >
                      +
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="warning"
                      size="lg"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonMathClick("-")}
                    >
                      -
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="warning"
                      size="lg"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonMathClick("*")}
                    >
                      *
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="warning"
                      size="lg"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonMathClick("/")}
                    >
                      /
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="warning"
                      size="lg"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonMathClick("^")}
                    >
                      ^
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="warning"
                      size="lg"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonMathClick("(")}
                    >
                      (
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="warning"
                      size="lg"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonMathClick(")")}
                    >
                      )
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="warning"
                      size="lg"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonMathClick("x")}
                    >
                      x
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="warning"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonMathClick("sin(")}
                    >
                      sin
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="warning"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonMathClick("cos(")}
                    >
                      cos
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="warning"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonMathClick("tan(")}
                    >
                      tan
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="warning"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonMathClick("cos(")}
                    >
                      cos
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="warning"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonMathClick("tan(")}
                    >
                      tan
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="warning"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonMathClick("log(")}
                    >
                      log
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="warning"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonMathClick("sqrt(")}
                    >
                      sqrt
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      variant="success"
                      className="border border-1 border-black w-100 h-100"
                      onClick={() => handleButtonSubmit(inputValue)}
                    >
                      Realizar
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      variant="danger"
                      className="border border-1 border-black w-100 h-100"
                      onClick={cleanInputs}
                    >
                      Limpiar
                    </Button>
                  </Col>
                </Row>
              </div>
              <Form.Control
                onChange={handleInputChange}
                className="fs-4 mb-3"
                as="textarea"
                size="lg"
                value={inputValue}
              />
              <h3 className="text-center textToDark">Resultado:</h3>
              <Form.Control
                className="fs-4"
                as="textarea"
                size="lg"
                value={resultDerivative}
                disabled
              />
            </Col>
            <Col
              data-aos="fade-left"
              data-aos-duration="700"
              md={5}
              className="mt-3"
            >
              <h3 className="text-center textToDark">Ejemplos:</h3>
              <Row className="g-2 pt-3">
                {exercises.map((exercise) => (
                  <Col key={exercise.id} md={4}>
                    <button
                      className={`action-de btn-derivative rounded-1 one`}
                      onClick={() =>
                        handleSubmitExample(exercise.function, exercise.id === 7 ? true : false)
                      }
                    >
                      <p className="fw-bolder">{exercise.label}</p>
                    </button>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export { Derivatives };
