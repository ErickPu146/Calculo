import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row, Form } from "react-bootstrap";

AOS.init();

const 
Multiplicacion = () => {
  return (
    <>
      <Form data-aos="fade-up">
        <Row className="row-gap-3 justify-content-center">
          <Col md={6}>
            Ingrese la base del primer número:
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Ingrese el exponente del primer número:
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Ingrese la base del segundo número:
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Ingrese el exponente del segundo número:
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

const Division = () => {
  return (
    <>
      <Form data-aos="fade-down">
        <Row className="row-gap-3 justify-content-center">
          <Col md={6}>
            Ingrese la base del numerador:
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Ingrese el exponente del numerador:
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Ingrese la base del denomidor:
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Ingrese el exponente del denominador:
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

const PotenciaNumeroElevadoPotencia = () => {
  return (
    <>
      <Form data-aos="fade-left">
        <Row className="row-gap-3 justify-content-center">
          <Col md={6}>
            Ingrese el número:
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Ingrese el primer exponente:
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Ingrese el segundo exponente::
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

const PotenciaProductoElevadoPotencia = () => {
  return (
    <>
      <Form data-aos="fade-right">
        <Row className="row-gap-3 justify-content-center">
          <Col md={6}>
            Ingrese la base del primer número:
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Ingrese la base del segundo número:
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Ingrese el exponente:
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

const PotenciaCocienteElevadoPotencia = () => {
  return (
    <>
      <Form data-aos="fade-up">
        <Row className="row-gap-3 justify-content-center">
          <Col md={6}>
            Ingrese el numerador:
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Ingrese el denominador:
            <Form.Control type="number" size="lg" />
          </Col>
          <Col md={6}>
            Ingrese el exponente:
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

export {
  Multiplicacion,
  Division,
  PotenciaNumeroElevadoPotencia,
  PotenciaProductoElevadoPotencia,
  PotenciaCocienteElevadoPotencia,
};
