import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "~components/VideoModal";
import { Link } from "~components";
import ImageGroup from "./Components/ImageGroup";
import Hero from "./style";
import styled from "styled-components";

const MyHero = styled(Hero)`
  background: url("https://agiletech.vn/wp-content/uploads/2021/06/Our-Service-1.png")
    no-repeat center;
  margin-top: 72px;
  height: 906px;
`;

export default function HeroSection() {
  return (
    <MyHero>
      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-start">
          {/* Welcome content Area */}
          <Col
            xs="12"
            className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-xs-11"
          >
            <Hero.Title className="text-white">
              WEBSITE <br className="d-none d-xs-block" /> DEVELOPMENT
            </Hero.Title>
            <Hero.Text className="text-white">
              When it comes to developing your website, AgileTech focuses on
              <br className="d-none d-sm-block" />
              User Experience to bring about full‐scale solutions that optimize
              <br className="d-none d-sm-block" />
              for both desktop & mobile browsers. Continuous improvement is what
              <br className="d-none d-sm-block" />
              we always keep in mind.
            </Hero.Text>
            <Hero.BtnGroup>
              <Hero.Button className="btn-white btn-2" as={Link} to="/">
                What We Offer
              </Hero.Button>
            </Hero.BtnGroup>
          </Col>
        </Row>
      </Container>
    </MyHero>
  );
}
