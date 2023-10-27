import React, { useState } from "react";
import { BtnReturnMenu } from "../../components/btnReturnMenu";
import { Col, Container, Row, Form } from "react-bootstrap";
import { FormExerciseRMProducts } from "../../components/formExerciseRMProducts";

const RemarkableProducts = () => {
  const [selectedExercise, setSelectedExcercise] = useState(0);
  return (
    <>
      <Container className="pt-5">
        <Row className="justify-content-center row-gap-4">
          <Col md={12}>
            <BtnReturnMenu />
          </Col>
          <Col md={12}>
            <h3 className="text-center">CALCULADORA DE PRODUCTOS NOTABLES</h3>
          </Col>
          <Col md={8}>
            <Row className="justify-content-center">
              <Col md={12} className="w-100">
                <h5 className="text-center">
                  Seleccione la opción que realizará:
                </h5>
                <Form.Select
                  onChange={(e) =>
                    setSelectedExcercise(parseInt(e.target.value))
                  }
                >
                  <option>Opciones:</option>
                  <option value="1">
                    Cuadrado de la suma de dos términos (a + b)^2
                  </option>
                  <option value="2">
                    Cuadrado de la diferencia de dos términos (a - b)^2
                  </option>
                  <option value="3">
                    Producto de la suma por la diferencia de dos términos (a +
                    b)(a - b)
                  </option>
                </Form.Select>
              </Col>
              <Col md={12} className="pt-4">
                <FormExerciseRMProducts value={selectedExercise} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { RemarkableProducts };
