import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "~components/VideoModal";
import { Link } from "~components";
import OurBlog from "./style";
import styled from "styled-components";
import Slider from "react-slick";
import ServicesCard from "./Components/Card";
import { useQuery } from "react-query";
import { findBlogs } from "~services/blogServices";

const SliderWrapper = styled.div`
  @media (min-width: 1200px) {
    .slick-slide {
      padding: 0 0 30px 0;
    }
  }
`;

export default function OurblogSection() {
  const { data: recentPosts } = useQuery(["findBlogs"], () =>
    findBlogs({ limit: 3, offset: 0 })
  );

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
    <OurBlog backgroundColor="#E9FBF8">
      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-start">
          {/* Welcome content Area */}
          <Col
            xs="12"
            className="col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-xs-10 mt-3"
          >
            <div className="welcome-content welcome-content--l3">
              <OurBlog.Subtitle className="d-none d-lg-block">
                News & Articles
              </OurBlog.Subtitle>
              <OurBlog.Title className="d-none d-lg-block">
                Fetek Blog
              </OurBlog.Title>
              <OurBlog.Subtitle className="d-lg-none d-xs-block text-center">
                News & Articles
              </OurBlog.Subtitle>
              <OurBlog.Title className="d-lg-none d-xs-block text-center">
                Fetek Blog
              </OurBlog.Title>
              <OurBlog.Text>
                With a talented team and a transparent working process, we are
                <br className="d-none d-sm-block" />
                always ready to move forwards with you on the way to pursuing
                innovative ideas.
              </OurBlog.Text>
              <OurBlog.BtnGroup className="d-none d-lg-block">
                <OurBlog.Button
                  className="btn-white text-primary"
                  style={{ border: "1px solid rgba(7, 0, 59, 0.17)" }}
                  id="LWZ7iytIA6k"
                  as={Link}
                  to="/blog"
                >
                  See All
                </OurBlog.Button>
              </OurBlog.BtnGroup>
              <OurBlog.BtnGroup className="d-lg-none d-xs-block text-center">
                <OurBlog.Button
                  className="btn-white text-primary"
                  style={{ border: "1px solid rgba(7, 0, 59, 0.17)" }}
                  id="LWZ7iytIA6k"
                  as={Link}
                  to="/blog"
                >
                  See All
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
                {recentPosts?.data?.items?.map(({ fields, sys }, index) => {
                  return (
                    <div>
                      <ServicesCard
                        title={fields?.title}
                        text={fields?.desc}
                        to={"/blog/" + fields?.keyword}
                      />
                    </div>
                  );
                })}
              </Slider>
            </SliderWrapper>
          </Col>
        </Row>
      </Container>
    </OurBlog>
  );
}
