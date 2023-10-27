import React, { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row, Form, Button } from "react-bootstrap";
import { ContentContext } from "../../context";
import { Controller, useForm } from "react-hook-form";

AOS.init();

const Multiplicacion = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      base1: "",
      exponente1: "",
      base2: "",
      exponente2: "",
    },
  });
  const { multiplicacionExponentes, resultadoMulti, setResultadoMulti } =
    useContext(ContentContext);

  const onSubmit = (data) => {
    const { base1, exponente1, base2, exponente2 } = data;
    const base1Int = parseInt(base1);
    const base2Int = parseInt(base2);
    const exponente1Int = parseInt(exponente1);
    const exponente2Int = parseInt(exponente2);
    multiplicacionExponentes(base1Int, exponente1Int, base2Int, exponente2Int);
  };

  const clearInputs = () => {
    reset();
    setResultadoMulti("");
  };

  return (
    <>
      <Form data-aos="fade-up" onSubmit={handleSubmit(onSubmit)}>
        <Row className="row-gap-3 justify-content-center">
          <Col md={6}>
            <label>Ingrese la base del primer número:</label>
            <Controller
              name="base1"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Ingrese el exponente del primer número:</label>
            <Controller
              name="exponente1"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Ingrese la base del segundo número:</label>
            <Controller
              name="base2"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Ingrese el exponente del segundo número:</label>
            <Controller
              name="exponente2"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Resultado:</label>
            <Form.Control
              type="text"
              size="lg"
              disabled
              value={resultadoMulti ? resultadoMulti : ""}
            />
          </Col>
          <Col md={6} className="d-flex justify-content-around">
            <Button type="submit">Calcular</Button>
            <Button
              type="button"
              className="bg-success"
              onClick={() => clearInputs()}
            >
              Limpiar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

const Division = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      base_numerador: "",
      exponente_numerador: "",
      base_denominador: "",
      exponente_denominador: "",
    },
  });
  const { divisionExponentes, resultadoDivision, setResultadoDivision } = useContext(ContentContext);

  const onSubmit = (data) => {
    const {
      base_numerador,
      exponente_numerador,
      base_denominador,
      exponente_denominador,
    } = data;
    const base1Int = parseInt(base_numerador);
    const base2Int = parseInt(base_denominador);
    const exponente1Int = parseInt(exponente_numerador);
    const exponente2Int = parseInt(exponente_denominador);
    divisionExponentes(base1Int, exponente1Int, base2Int, exponente2Int);
  };

  const clearInputs = () => {
    reset();
    setResultadoDivision("");
  };
  return (
    <>
      <Form data-aos="fade-down" onSubmit={handleSubmit(onSubmit)}>
        <Row className="row-gap-3 justify-content-center">
          <Col md={6}>
            <label>Ingrese la base del numerador:</label>
            <Controller
              name="base_numerador"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Ingrese el exponente del numerador:</label>
            <Controller
              name="exponente_numerador"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Ingrese la base del denomidor:</label>
            <Controller
              name="base_denominador"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Ingrese el exponente del denominador:</label>
            <Controller
              name="exponente_denominador"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Resultado:</label>
            <Form.Control
              type="text"
              size="lg"
              disabled
              value={resultadoDivision ? resultadoDivision : ""}
            />
          </Col>
          <Col md={6} className="d-flex justify-content-around">
            <Button type="submit">Calcular</Button>
            <Button
              type="button"
              className="bg-success"
              onClick={() => clearInputs()}
            >
              Limpiar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

const PotenciaNumeroElevadoPotencia = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      base: "",
      exponente1: "",
      exponente2: "",
    },
  });
  const { potenciaDePotencia, resultadoPotenciaDePotencia, setResultadoPotenciaDePotencia } = useContext(ContentContext);

  const onSubmit = (data) => {
    const {
      base,
      exponente1,
      exponente2,
    } = data;
    const baseInt = parseInt(base);
    const exponente1Int = parseInt(exponente1);
    const exponente2Int = parseInt(exponente2);
    potenciaDePotencia(baseInt, exponente1Int, exponente2Int);
  };

  const clearInputs = () => {
    reset();
    setResultadoPotenciaDePotencia("");
  };
  return (
    <>
      <Form data-aos="fade-left" onSubmit={handleSubmit(onSubmit)}>
        <Row className="row-gap-3 justify-content-center">
        <Col md={6}>
            <label>Ingrese el número:</label>
            <Controller
              name="base"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Ingrese el primer exponente</label>
            <Controller
              name="exponente1"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Ingrese el segundo exponente:</label>
            <Controller
              name="exponente2"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Resultado:</label>
            <Form.Control
              type="text"
              size="lg"
              disabled
              value={resultadoPotenciaDePotencia ? resultadoPotenciaDePotencia : ""}
            />
          </Col>
          <Col md={6} className="d-flex justify-content-around">
            <Button type="submit">Calcular</Button>
            <Button
              type="button"
              className="bg-success"
              onClick={() => clearInputs()}
            >
              Limpiar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

const PotenciaProductoElevadoPotencia = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      base1: "",
      base2: "",
      exponente: "",
    },
  });
  const { potenciaDeProducto, resultadoPotenciaProducto, setResultadoPotenciaProducto } = useContext(ContentContext);

  const onSubmit = (data) => {
    const {
      base1,
      base2,
      exponente,
    } = data;
    const base1Int = parseInt(base1);
    const base2Int = parseInt(base2);
    const exponenteInt = parseInt(exponente);
    potenciaDeProducto(base1Int, base2Int, exponenteInt);
  };

  const clearInputs = () => {
    reset();
    setResultadoPotenciaProducto("");
  };
  return (
    <>
      <Form data-aos="fade-left" onSubmit={handleSubmit(onSubmit)}>
        <Row className="row-gap-3 justify-content-center">
        <Col md={6}>
            <label>Ingrese la base del primer número:</label>
            <Controller
              name="base1"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Ingrese la base del segundo número</label>
            <Controller
              name="base2"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Ingrese el exponente:</label>
            <Controller
              name="exponente"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Resultado:</label>
            <Form.Control
              type="text"
              size="lg"
              disabled
              value={resultadoPotenciaProducto ? resultadoPotenciaProducto : ""}
            />
          </Col>
          <Col md={6} className="d-flex justify-content-around">
            <Button type="submit">Calcular</Button>
            <Button
              type="button"
              className="bg-success"
              onClick={() => clearInputs()}
            >
              Limpiar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

const PotenciaCocienteElevadoPotencia = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      numerador: "",
      denominador: "",
      exponente: "",
    },
  });
  const { potenciaDeCociente, resultadoPotenciaCociente, setResultadoPotenciaCociente } = useContext(ContentContext);

  const onSubmit = (data) => {
    const {
      numerador,
      denominador,
      exponente,
    } = data;
    const numeradorInt = parseInt(numerador);
    const denominadorInt = parseInt(denominador);
    const exponenteInt = parseInt(exponente);
    potenciaDeCociente(numeradorInt, denominadorInt, exponenteInt);
  };

  const clearInputs = () => {
    reset();
    setResultadoPotenciaCociente("");
  };
  return (
    <>
      <Form data-aos="fade-up" onSubmit={handleSubmit(onSubmit)}>
        <Row className="row-gap-3 justify-content-center">
          <Col md={6}>
          <label>Ingrese el numerador:</label>
            <Controller
              name="numerador"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Ingrese el denominador:</label>
            <Controller
              name="denominador"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Ingrese el exponente:</label>
            <Controller
              name="exponente"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Resultado:</label>
            <Form.Control
              type="text"
              size="lg"
              disabled
              value={resultadoPotenciaCociente ? resultadoPotenciaCociente : ""}
            />
          </Col>
          <Col md={6} className="d-flex justify-content-around">
            <Button type="submit">Calcular</Button>
            <Button
              type="button"
              className="bg-success"
              onClick={() => clearInputs()}
            >
              Limpiar
            </Button>
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
