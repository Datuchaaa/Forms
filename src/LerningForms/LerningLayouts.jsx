import React from "react";
import Forms from "./Forms";
import { Container, Row, Col, Input } from "reactstrap";

const LerningLayouts = () => {
  return (
    <div>
      <h1>LerningLayouts</h1>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <Input type="text" placeholder="Email" />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Input type="password" placeholder="Password" />
          </Col>
          <Col xs={12} md={6} lg={0.3}>
            <Input type="password" placeholder="second Password" />
          </Col>
        </Row>
      </Container>
      <Forms />
    </div>
  );
};

export default LerningLayouts;
