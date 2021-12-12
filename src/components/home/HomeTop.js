import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";

const HomeTop = () => {
  return (
    <Fragment>
      <Container className="p-0 m-0 overflow-hidden" fluid={true}>
        <Row>
          <Col lg={3} md={3} sm={12}>
            <MegaMenu />
          </Col>

          <Col lg={9} md={9} sm={12}>
            <HomeSlider />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default HomeTop;
