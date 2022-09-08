import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "~components/VideoModal";
import { Link } from "~components";
import OurBlog from "./style";
import styled from "styled-components";
import Slider from "react-slick";
import ServicesCard from "./Components/Card";

const SliderWrapper = styled.div`
  @media (min-width: 1200px) {
    .slick-slide {
      padding: 0 0 30px 0;
    }
  }
`;

export default function OurblogSection() {
  const sliderConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <></>,
          prevArrow: <></>,
        },
      },
    ],
  };

  return (
    <OurBlog>
      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-start">
          {/* Welcome content Area */}
          <Col
            xs="12"
            className="col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-xs-10 mt-3"
          >
            <div className="welcome-content welcome-content--l3">
              <OurBlog.Subtitle>Get Started</OurBlog.Subtitle>
              <OurBlog.Text>
                With a talented team and a transparent working process, we are
                <br className="d-none d-sm-block" />
                always ready to move forwards with you on the way to pursuing
                innovative ideas.
              </OurBlog.Text>
              <OurBlog.BtnGroup>
                <OurBlog.Button
                  className="btn-primary text-white"
                  as={Video}
                  id="LWZ7iytIA6k"
                >
                  Write A Message
                </OurBlog.Button>
              </OurBlog.BtnGroup>
            </div>
          </Col>
          <Col xs="1"></Col>
          <Col
            xs="12"
            className="col-xxl-7 col-xl-6 col-lg-5 col-md-8 col-6 position-static d-lg-block mt-3"
          >
            <SliderWrapper>
              <Slider {...sliderConfig}>
                <div>
                  <ServicesCard
                    title={`Why Your SaaS Business should use WordPress`}
                    text={`A content management system like WordPress can help you build a highly engaging website`}
                  />
                </div>
                <div>
                  <ServicesCard
                    title={`Why Your SaaS Business should use WordPress`}
                    text={`A content management system like WordPress can help you build a highly engaging website`}
                  />
                </div>
                <div>
                  <ServicesCard
                    title={`Why Your SaaS Business should use WordPress`}
                    text={`A content management system like WordPress can help you build a highly engaging website`}
                  />
                </div>
                <div>
                  <ServicesCard
                    title={`Why Your SaaS Business should use WordPress`}
                    text={`A content management system like WordPress can help you build a highly engaging website`}
                  />
                </div>
                <div>
                  <ServicesCard
                    title={`Why Your SaaS Business should use WordPress`}
                    text={`A content management system like WordPress can help you build a highly engaging website`}
                  />
                </div>
              </Slider>
            </SliderWrapper>
          </Col>
        </Row>
      </Container>
    </OurBlog>
  );
}
