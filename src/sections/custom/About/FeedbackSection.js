import React from "react";
import Slider from "react-slick";
import { Images } from "~data";
import { Col, Container, Row } from "react-bootstrap";
import ArrowLeft from "~assets/image/custom/arrow-left.inline.svg";
import ArrowRight from "~assets/image/custom/arrow-right.inline.svg";
import clientAvatar from "~assets/image/custom/client-avatar.png";
import styled from "styled-components";
import SectionTitle from "./Components/SectionTitle";
import { Box, Paragraph } from "~styled";
import Feedback from "./style";

const ImageContainer = styled.div`
  padding: 20px;
`;

const SliderWrapper = styled(Box)`
  margin: auto;
  .slick-slide {
    padding: 0 0 10px 0;
  }
`;

const CommentBox = styled(Box)`
  padding: 63px 67px;
  box-sizing: border-box;
  border: 1px solid #fdfdff;
  box-shadow: 0px 97px 90px rgba(7, 0, 59, 0.12);
  border-radius: 12px;
  text-align: center;
  max-width: 1025.46px;
  max-height: 334.35px;
  margin: auto;
  background: #fdfdfd;
`;

const Rating = styled(Box)`
  display: flex;
  font-size: 15px;
  align-items: center;
  justify-content: center;
`;

const UserInfo = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;
`;

const RatingSingle = styled(Box)`
  color: ${(props) => (props ? "#ff971d" : "inherit")};
  margin-right: 5px;
  font-size: inherit;
`;

const PreviousArrow = ({ elSlider }) => {
  return (
    <button
      style={{
        width: "64px",
        height: "64px",
        border: "2px solid white",
        borderRadius: "50%",
        background: "white",
        position: "absolute",
        top: "45%",
        left: "-25px",
        zIndex: 100,
        boxShadow: "0px 24px 32px rgba(59, 59, 59, 0.12)",
      }}
      onClick={() => {
        elSlider.current.slickPrev();
      }}
    >
      <span>
        <ArrowLeft />
      </span>
    </button>
  );
};

const NextArrow = ({ elSlider }) => {
  return (
    <button
      style={{
        width: "64px",
        height: "64px",
        border: "2px solid white",
        borderRadius: "50%",
        background: "white",
        position: "absolute",
        top: "45%",
        right: "-25px",
        zIndex: 100,
        boxShadow: "0px 24px 32px rgba(59, 59, 59, 0.12)",
      }}
      onClick={() => {
        elSlider.current.slickNext();
      }}
    >
      <span>
        <ArrowRight />
      </span>
    </button>
  );
};

const MyStars = ({ stars }) => {
  const arr = [];

  for (let i = 0; i < stars; i++) {
    arr.push(
      <RatingSingle key={i}>
        <i className="fa fa-star" />
      </RatingSingle>
    );
  }

  return arr;
};

export default function FeedbackSection({ data }) {
  const elSlider = React.useRef();
  const sliderConfig = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow elSlider={elSlider} />,
    prevArrow: <PreviousArrow elSlider={elSlider} />,
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
    <Feedback backgroundColor="#ffffff" id="Testimonial">
      <Feedback.Container id="about-section">
        <Row className="align-items-center justify-content-center">
          <Col
           xs="12"
           className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-xs-12"
          >
          {/* <Feedback.Subtitle>Testiomonials</Feedback.Subtitle> */}
          <SectionTitle
            title={`About Us`}
            subTitleProps={{ mb: "27px" }}
            titleProps={{ mb: "10px", as: "h2" }}
            mb="69px"
            // className="text-center"
          ></SectionTitle>
            <Paragraph
          >About us, about us....</Paragraph>
          </Col>
          <Col
            xs="12"
            className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-xs-12"
          >
          <SliderWrapper>
            <Slider ref={elSlider} {...sliderConfig}>
              {data.items.map((item, index) => (
                <div key={index}>
                    <img src={item.guest.avatar} alt="" />
                  <UserInfo>
                    {/* <Feedback.UserName>{item.guest.name}</Feedback.UserName> */}
                    {/* <Feedback.Subtitle>{item.guest.position}</Feedback.Subtitle> */}
                  </UserInfo>
                </div>
              ))}
            </Slider>
          </SliderWrapper>
          </Col>
        </Row>
     
      </Feedback.Container>
    </Feedback>
  );
}
