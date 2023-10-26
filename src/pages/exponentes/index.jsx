import React from "react";
import { BtnReturnMenu } from "../../components/btnReturnMenu";
import { Col, Container, Row, Form } from "react-bootstrap";

const Exponentes = () => {
  return (
    <>
      <Container className="pt-5">
        <Row className="justify-content-center row-gap-4">
          <Col md={12}>
            <BtnReturnMenu />
          </Col>
          <Col md={12}>
            <h3 className="text-center">CALCULADORA DE EXPONENTES</h3>
          </Col>
          <Col md={8}>
            <Row className="justify-content-center">
              <Col md={12} className="w-100">
                <h5 className="text-center">Seleccione la opción que realizará:</h5>
                <Form.Select>
                  <option>Opciones:</option>
                  <option value="1">Multiplicación de exponentes</option>
                  <option value="2">División de exponentes</option>
                  <option value="3">
                    Potencia de un número elevado a otra potencia
                  </option>
                  <option value="4">
                    Potencia de un producto elevado a una potencia
                  </option>
                  <option value="5">
                    Potencia de un cociente elevado a una potencia
                  </option>
                </Form.Select>
              </Col>
              <Col md={12}>
              
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { Exponentes };
