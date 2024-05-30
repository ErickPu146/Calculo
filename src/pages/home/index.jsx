import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

AOS.init();

const Home = () => {
  return (
    <>
      <div className="container-login">
        <Row className="container-form-login">
          <Col
            md="4"
            className="overlay d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <h1 className="text-center">PRODUCTOS NOTABLES</h1>
            <Link to="/productos-notables">
              <button className="action ghost">Hacer ejercicios</button>
            </Link>
          </Col>
          <Col
            md="4"
            data-aos="fade-left"
            data-aos-duration="1500"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <h1 className="text-center">LEYES DE EXPONENTES</h1>
            <Link to="/exponentes">
              <button className="action login">Hacer ejercicios</button>
            </Link>
          </Col>
          <Col
            md="4"
            className="overlay d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <h5 className="fw-bolder text-warning shadow-lg p-3 mb-5 bg-body-tertiary rounded new-theme ">
              Tema nuevo  
              <i class="bi bi-star-fill text-warning"></i>
            </h5>
            <h1 className="text-center">DERIVADAS</h1>
            <Link to="/derivadas">
              <button className="action ghost">Hacer ejercicios</button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export { Home };
