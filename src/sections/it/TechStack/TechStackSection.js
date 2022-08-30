import React from "react";
import { Paragraph } from "~styled";
import TechStackData from "~data/techStackData";
import TechStack from "./style";
import SectionTitle from "./Components/SectionTitle";
import { Col, Container, Row } from "react-bootstrap";

export default function TechStackSection() {
  return (
    <TechStack backgroundColor="white">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xxl-6 col-xl-7 col-md-9 col-sm-10 text-center">
            <SectionTitle
              subTitle="Technologies"
              title="Technologies we're experts in"
              subTitleProps={{ mb: "27px" }}
              titleProps={{ mb: "10px", as: "h2" }}
              mb="16px"
            ></SectionTitle>
            <Paragraph>
              From scratch to execution, AgileTech always applies advanced and
              cutting-edge technologies to deliver your ideas into impactful and
              scalable products.
            </Paragraph>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {Object.entries(TechStackData).map(([key, value]) => (
            <div key={key}>
              <SectionTitle
                title={key}
                subTitleProps={{ mb: "27px" }}
                titleProps={{ mb: "10px", as: "h2" }}
                mb="69px"
                className="text-center"
              ></SectionTitle>
              <Row className="justify-content-center">
                {value.map(({ name, logo }) => {
                  return (
                    <Col className="col-xxl-3 col-sm-10 text-center">
                      <img src={logo} alt="logo" />
                      <Paragraph mt="16px">{name}</Paragraph>
                    </Col>
                  );
                })}
              </Row>
            </div>
          ))}
        </Row>
      </Container>
    </TechStack>
  );
}
