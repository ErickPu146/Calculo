import React, { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row, Form, Button } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { ContentContext } from "../../context";

AOS.init();

const CuadradoSuma = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      numero1: "",
      numero2: "",
    },
  });
  const { binomioCuadradoPerfecto, resultadoBinomioCuadradoPerfecto, setResultadoBinomioCuadradoPerfecto } =
    useContext(ContentContext);

  const onSubmit = (data) => {
    const { numero1, numero2 } = data;
    const numero1Int = parseInt(numero1);
    const numero2Int = parseInt(numero2);
    binomioCuadradoPerfecto(numero1Int, numero2Int);
  };

  const clearInputs = () => {
    reset();
    setResultadoBinomioCuadradoPerfecto("");
  };

  return (
    <>
      <Form data-aos="fade-up" onSubmit={handleSubmit(onSubmit)}>
        <Row className="row-gap-3 justify-content-center">
          <Col md={6}>
            <label>Ingrese el valor de "a":</label>
            <Controller
              name="numero1"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Ingrese el valor de "b":</label>
            <Controller
              name="numero2"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Resultado:</label>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              size="lg"
              disabled
              value={resultadoBinomioCuadradoPerfecto ? resultadoBinomioCuadradoPerfecto : ""}
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

const CuadradoDiferencia = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      numero1: "",
      numero2: "",
    },
  });
  const { diferenciaBinomioCuadradoPerfecto, resultadoDiferenciaBinomioCuadradoPerfecto, setResultadoDiferenciaBinomioCuadradoPerfecto } =
    useContext(ContentContext);

  const onSubmit = (data) => {
    const { numero1, numero2 } = data;
    const numero1Int = parseInt(numero1);
    const numero2Int = parseInt(numero2);
    diferenciaBinomioCuadradoPerfecto(numero1Int, numero2Int);
  };

  const clearInputs = () => {
    reset();
    setResultadoDiferenciaBinomioCuadradoPerfecto("");
  };
  return (
    <>
      <Form data-aos="fade-down" onSubmit={handleSubmit(onSubmit)}>
        <Row className="row-gap-3 justify-content-center">
        <Col md={6}>
            <label>Ingrese el valor de "a":</label>
            <Controller
              name="numero1"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Ingrese el valor de "b":</label>
            <Controller
              name="numero2"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Resultado:</label>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              size="lg"
              disabled
              value={resultadoDiferenciaBinomioCuadradoPerfecto ? resultadoDiferenciaBinomioCuadradoPerfecto : ""}
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

const ProductoSumaPorDiferencia = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      numero1: "",
      numero2: "",
    },
  });
  const { productoSumaDiferenciaDosTerminos, resultadoProductoSumaDiferencia, setProductoSumaDiferencia } =
    useContext(ContentContext);

  const onSubmit = (data) => {
    const { numero1, numero2 } = data;
    const numero1Int = parseInt(numero1);
    const numero2Int = parseInt(numero2);
    productoSumaDiferenciaDosTerminos(numero1Int, numero2Int);
  };

  const clearInputs = () => {
    reset();
    setProductoSumaDiferencia("");
  };
  return (
    <>
      <Form data-aos="fade-left" onSubmit={handleSubmit(onSubmit)}>
        <Row className="row-gap-3 justify-content-center">
        <Col md={6}>
            <label>Ingrese el valor de "a":</label>
            <Controller
              name="numero1"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Ingrese el valor de "b":</label>
            <Controller
              name="numero2"
              control={control}
              render={({ field }) => (
                <Form.Control type="number" size="lg" {...field} required />
              )}
            />
          </Col>
          <Col md={6}>
            <label>Resultado:</label>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              size="lg"
              disabled
              value={resultadoProductoSumaDiferencia ? resultadoProductoSumaDiferencia : ""}
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

export { CuadradoSuma, CuadradoDiferencia, ProductoSumaPorDiferencia };
