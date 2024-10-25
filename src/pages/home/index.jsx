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
        <Row className="container-form-login rounded-5">
          <Col
            md="6"
            className="border overlay d-flex flex-column justify-content-center align-items-center rounded-5"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <h1 className="text-center">PRODUCTOS NOTABLES</h1>
            <Link to="/productos-notables">
              <button className="action ghost">Hacer ejercicios</button>
            </Link>
          </Col>
          <Col
            md="6"
            data-aos="fade-left"
            data-aos-duration="1500"
            className="border rounded-5 d-flex flex-column justify-content-center align-items-center bg-white"
          >
            <h1 className="text-center">LEYES DE EXPONENTES</h1>
            <Link to="/exponentes">
              <button className="action login">Hacer ejercicios</button>
            </Link>
          </Col>
          <Col
            md="6"
            className="border rounded-5 d-flex flex-column justify-content-center align-items-center bg-white"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <h1 className="text-center">DERIVADAS</h1>
            <Link to="/derivadas">
              <button className="action login">Hacer ejercicios</button>
            </Link>
          </Col>
          <Col
            md="6"
            className="border overlay d-flex flex-column justify-content-center align-items-center rounded-5"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <h5 className="fw-bolder shadow-lg p-3 mb-5 rounded-5 new-theme ">
              Tema nuevo  
              <i class="mx-2 bi bi-star-fill text-warning"></i>
            </h5>
            <h1 className="text-center">Física</h1>
            <Link to="/fisica2">
              <button className="action ghost">Hacer ejercicios</button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export { Home };
