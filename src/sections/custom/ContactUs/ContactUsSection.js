import React from "react";
import ContactUs from "./style";
import { Col, Container, Row } from "react-bootstrap";
import LineOne from "~assets/image/custom/line-one.inline.svg";
import LineTwo from "~assets/image/custom/line-two.inline.svg";

export default function ContactUsSection() {
  return (
    <ContactUs backgroundColor="#60E1CB">
      <span
        className="d-none d-sm-inline"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "translate(-50%, 0)",
        }}
      >
        <LineOne></LineOne>
      </span>
      <span
        className="d-none d-sm-inline"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      >
        <LineTwo style={{ width: "500px", height: "auto" }}></LineTwo>
      </span>

      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-center">
          <ContactUs.Title className="text-center">
            Interested to work with us ?
          </ContactUs.Title>
          <ContactUs.Text className="text-center">
            Send a line here get and update daily
          </ContactUs.Text>
          <ContactUs.Button>contact@fetek.io</ContactUs.Button>
        </Row>
      </Container>
    </ContactUs>
  );
}
