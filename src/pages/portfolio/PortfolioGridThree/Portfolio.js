import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Portfolio from "./style";

export default function PortfolioSection({
  gutters,
  containerFluid,
  name,
  image,
  description,
  downladLink,
  ...rest
}) {

  return (
    <Portfolio {...rest}>
      <Container fluid={containerFluid}>
        {/* <Row className="align-items-center justify-content-center">
          <Col xs="12" className="col-xl-7 col-lg-5 col-md-8 col-xs-9">
         
          </Col>
        </Row> */}
        <Row className={`pa-5 gap-3 justify-content-center ${!gutters ? "gx-0" : null}`}>
         
          <Col xs="12" className="col-xl-3 col-lg-3 col-md-3 col-xs-3 d-flex flex-xs-column gap-3">
          <Portfolio.Box mbLG="45px" mb="10px">
              <Portfolio.Title as="h4" mb="13px">
                {name}
              </Portfolio.Title>
              <Portfolio.Subtitle as="h2">{description}</Portfolio.Subtitle>
            </Portfolio.Box>

    
          {/* <Portfolio.Title as="h2">{description}</Portfolio.Title> */}
      
          </Col>
          <Col xs="12" className="col-xl-7 col-lg-7 col-md-7 col-xs-7 col-offset-2">
            <figure class="max-w-lg">
              <img src={image} class="h-auto w-100 rounded-lg rounded" alt="image description" />
            </figure>
          </Col>
        </Row>

        <Row>
            <Portfolio.Box className="text-center hidden-xs" mt="30px">
                <a href={downladLink} download target="_blank">
                  <Portfolio.Button className="btn-primary">Download</Portfolio.Button>
                  </a>
                </Portfolio.Box>
        </Row>
       
      </Container>
    </Portfolio>
  );
}
