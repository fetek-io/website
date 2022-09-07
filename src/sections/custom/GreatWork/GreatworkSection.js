import React from "react";
import Slider from "react-slick";
import { Images } from "~data";
import { Col, Container, Row } from "react-bootstrap";
import GreatWork from "./style";
import firstForte from "~assets/image/custom/forte1.png";
import secondForte from "~assets/image/custom/forte2.png";
import thirdForte from "~assets/image/custom/forte3.png";
import styled from "styled-components";
import SectionTitle from "./Components/SectionTitle";

const ImageContainer = styled.div`
  padding: 20px;
`;

const ForteImage = styled.img`
  max-width: 412px;
  height: auto;
  margin-bottom: 32px;

  @media (max-width: 1366px) {
    max-width: 500px;
  }

  @media (max-width: 1200px) {
    max-width: 320px;
  }
`;

export default function GreatworkSection() {
  const elSlider = React.useRef();

  //   $screen-xxs: 320px;
  // $screen-xs: 480px;
  // $screen-sm: 576px;
  // $screen-md: 768px;
  // $screen-lg: 992px;
  // $screen-xl: 1200px;
  // $screen-xxl: 1366px;
  // $screen-xxxl: 1600px;

  const sliderConfig = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 320,
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
      {
        breakpoint: 480,
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
      {
        breakpoint: 576,
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
      {
        breakpoint: 992,
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
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: <></>,
          prevArrow: <></>,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <GreatWork
      backgroundColor="#E9FBF8"
      style={{ backgroundImage: "linear-gradient(#E9FBF8 50%, white 50%)" }}
    >
      <Container>
        <SectionTitle
          title={`Our Great Work`}
          subTitleProps={{ mb: "27px" }}
          titleProps={{ mb: "10px", as: "h2" }}
          mb="69px"
          className="text-center"
        ></SectionTitle>
        <Row className="align-items-center justify-content-center justify-content-md-start">
          <Slider ref={elSlider} {...sliderConfig}>
            <ImageContainer>
              <ForteImage src={firstForte} alt="our forte" />

              <GreatWork.Text>
                With a talented team and a transparent working process, we are
                always ready to move forwards with you on the way to pursuing
                innovative ideas.
              </GreatWork.Text>
            </ImageContainer>
            <ImageContainer>
              <ForteImage src={secondForte} alt="our forte" />
              <GreatWork.Text>
                With a talented team and a transparent working process, we are
                always ready to move forwards with you on the way to pursuing
                innovative ideas.
              </GreatWork.Text>
            </ImageContainer>
            <ImageContainer>
              <ForteImage src={thirdForte} alt="our forte" />
              <GreatWork.Text>
                With a talented team and a transparent working process, we are
                always ready to move forwards with you on the way to pursuing
                innovative ideas.
              </GreatWork.Text>
            </ImageContainer>
            <ImageContainer>
              <ForteImage src={thirdForte} alt="our forte" />
              <GreatWork.Text>
                With a talented team and a transparent working process, we are
                always ready to move forwards with you on the way to pursuing
                innovative ideas.
              </GreatWork.Text>
            </ImageContainer>
          </Slider>
        </Row>
      </Container>
    </GreatWork>
  );
}
