import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "~components/VideoModal";
import { Link } from "~components";
import ImageGroup from "./Components/ImageGroup";
import Hero from "./style";
import { StaticImage as Img } from "gatsby-plugin-image";

export default function HeroSection() {
  return (
    <Hero>
      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-start">
          {/* Welcome content Area */}
          <Col
            xs="12"
            className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-xs-11"
          >
            <div className="welcome-content welcome-content--l3">
              <Hero.Subtitle>Get Started</Hero.Subtitle>
              <Hero.Title>
                YOUR RELIABLE <br className="d-none d-xs-block" /> TECHNOLOGY
                PARTNER
              </Hero.Title>
              <Hero.Text>
                With a talented team and a transparent working process, we are
                <br className="d-none d-sm-block" />
                always ready to move forwards with you on the way to pursuing
                innovative ideas.
              </Hero.Text>
              <Hero.BtnGroup>
                <Hero.Button
                  className="btn-primary text-white"
                  as={Video}
                  id="LWZ7iytIA6k"
                >
                  Write A Message
                </Hero.Button>
                <Hero.Button
                  className="btn-white text-primary"
                  style={{ border: "1px solid rgba(7, 0, 59, 0.17)" }}
                  as={Link}
                  to="/"
                >
                  Schedule A Meet
                </Hero.Button>
              </Hero.BtnGroup>
            </div>
          </Col>
          {/*/ .Welcome Content Area */}
          {/*Welcome Image Area */}
          <Col
            xs="12"
            className="col-xxl-7 col-xl-6 col-lg-5 col-md-8 col-6 position-static d-none d-lg-block"
          >
            <Img
              src="../../../assets/image/custom/hero.png"
              alt="heroimg"
              layout="fullWidth"
              placeholder="none"
            />
            {/* <ImageGroup /> */}
          </Col>
          {/*/ .Welcome Image Area */}
        </Row>
      </Container>
    </Hero>
  );
}
