import React from "react";
import { BtnReturnMenu } from "../../components/btnReturnMenu";
import { Col, Container, Row } from "react-bootstrap";

const ProductosNotables = () => {
  return (
    <>
      <Container className="pt-5">
        <Row>
          <Col md={12}>
            <BtnReturnMenu />
          </Col>
          <Col>Soy el notable</Col>
        </Row>
      </Container>
    </>
  );
};

export { ProductosNotables };
