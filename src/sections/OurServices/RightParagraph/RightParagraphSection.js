import React from "react";
import styled from "styled-components";
import { Heading, Paragraph } from "~styled";
import UnderstandingCustomers from "~assets/image/services/understanding-customers.png";

import { Col, Container, Row } from "react-bootstrap";

const SmallTitle = styled(Heading)`
  font-size: 25px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.2068;
  margin-bottom: 21px;
  color: #25373f;
  @media (min-width: 768px) {
    font-size: 35px;
  }

  @media (min-width: 992px) {
    font-size: 45px;
  }
`;

const Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.875;
  margin-bottom: 10px;
`;

const MyFigure = styled.figure`
  display: inline-block;
  vertical-align: top;
  margin: 0;
  max-width: 100%;
`;

const FigureWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
`;

export default function RightParagraphSection({ isLeftContent }) {
  return (
    <Container style={{ marginBottom: "32px" }}>
      {isLeftContent ? (
        <Row className="align-items-center justify-content-center justify-content-md-start">
          <Col
            xs="12"
            className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-xs-11 text-center"
          >
            <MyFigure>
              <FigureWrapper>
                <img
                  width="416"
                  height="419"
                  src={UnderstandingCustomers}
                  alt="Understanding customers"
                  loading="lazy"
                  sizes="(max-width: 416px) 100vw, 416px"
                />
              </FigureWrapper>
            </MyFigure>
          </Col>
          <Col
            xs="12"
            className="col-xxl-7 col-xl-6 col-lg-5 col-md-8 col-6 position-static d-none d-lg-block"
          >
            <SmallTitle>Understanding customers</SmallTitle>
            <Text>
              We begin our engagement by first understanding your users or
              customers on an emotional and psychological level. Designers in
              this stage spend a reasonable amount of time conducting user
              interviews and drawing empathy & customer journey maps to gain
              fundamental insights into their motivations, expectations, and
              pain points.
            </Text>
          </Col>
        </Row>
      ) : (
        <Row className="align-items-center justify-content-center justify-content-md-start">
          <Col
            xs="12"
            className="col-xxl-7 col-xl-6 col-lg-5 col-md-8 col-6 position-static d-none d-lg-block"
          >
            <SmallTitle>Understanding customers</SmallTitle>
            <Text>
              We begin our engagement by first understanding your users or
              customers on an emotional and psychological level. Designers in
              this stage spend a reasonable amount of time conducting user
              interviews and drawing empathy & customer journey maps to gain
              fundamental insights into their motivations, expectations, and
              pain points.
            </Text>
          </Col>
          <Col
            xs="12"
            className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-xs-11 text-center"
          >
            <MyFigure>
              <FigureWrapper>
                <img
                  width="416"
                  height="419"
                  src={UnderstandingCustomers}
                  alt="Understanding customers"
                  loading="lazy"
                  sizes="(max-width: 416px) 100vw, 416px"
                />
              </FigureWrapper>
            </MyFigure>
          </Col>
        </Row>
      )}
    </Container>
  );
}
