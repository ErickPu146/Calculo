import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row, Form } from "react-bootstrap";

AOS.init();

const CuadradoSuma = () => {
  return (
    <>
      <Form data-aos="fade-up">
        <Row className="row-gap-3 justify-content-center">
          <Col md={6}>
            Ingrese el valor de "a":
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Ingrese el valor de "b":
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Resultado:
            <Form.Control type="number" size="lg" disabled />
          </Col>
        </Row>
      </Form>
    </>
  );
};

const CuadradoDiferencia = () => {
  return (
    <>
      <Form data-aos="fade-down">
        <Row className="row-gap-3 justify-content-center">
          <Col md={6}>
            Ingrese el valor de "a":
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Ingrese el valor de "b":
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Resultado:
            <Form.Control type="number" size="lg" disabled />
          </Col>
        </Row>
      </Form>
    </>
  );
};

const ProductoSumaPorDiferencia = () => {
  return (
    <>
      <Form data-aos="fade-left">
        <Row className="row-gap-3 justify-content-center">
          <Col md={6}>
            Ingrese el valor de "a":
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Ingrese el valor de "b":
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Resultado:
            <Form.Control type="number" size="lg" disabled />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export { CuadradoSuma, CuadradoDiferencia, ProductoSumaPorDiferencia };
