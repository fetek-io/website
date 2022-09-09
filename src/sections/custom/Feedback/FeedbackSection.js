import React from "react";
import Slider from "react-slick";
import { Images } from "~data";
import { Col, Container, Row } from "react-bootstrap";
import ArrowLeft from "~assets/image/custom/arrow-left.inline.svg";
import ArrowRight from "~assets/image/custom/arrow-right.inline.svg";
import clientAvatar from "~assets/image/custom/client-avatar.png";
import styled from "styled-components";
import SectionTitle from "./Components/SectionTitle";
import { Box } from "~styled";
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
        top: "20%",
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
        top: "20%",
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

export default function FeedbackSection() {
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
    <Feedback backgroundColor="#ffffff">
      <Container>
        <Row className="justify-content-center justify-content-md-start">
          {/* <Feedback.Subtitle>Testiomonials</Feedback.Subtitle> */}
          <SectionTitle
            subTitle={`Testiomonials`}
            title={`Our Happy Clients`}
            subTitleProps={{ mb: "27px" }}
            titleProps={{ mb: "10px", as: "h2" }}
            mb="69px"
          ></SectionTitle>
        </Row>

        <Row className="align-items-center justify-content-center justify-content-md-start">
          <SliderWrapper>
            <Slider ref={elSlider} {...sliderConfig}>
              <div style={{ display: "inline !important" }}>
                <CommentBox>
                  <Feedback.Text>5.0</Feedback.Text>
                  <Rating pb="15px">
                    <RatingSingle active={true}>
                      <i className="fa fa-star" />
                    </RatingSingle>
                    <RatingSingle>
                      <i className="fa fa-star" />
                    </RatingSingle>
                    <RatingSingle>
                      <i className="fa fa-star" />
                    </RatingSingle>
                    <RatingSingle>
                      <i className="fa fa-star" />
                    </RatingSingle>
                    <RatingSingle>
                      <i className="fa fa-star" />
                    </RatingSingle>
                  </Rating>
                  <Feedback.Text>
                    With a talented team and a transparent working process, we
                    are always ready to move forwards with you on the way to
                    pursuing innovative ideas.
                  </Feedback.Text>
                </CommentBox>
                <UserInfo>
                  <img src={clientAvatar} alt="" />
                  <Feedback.UserName>Paulus Haverinen</Feedback.UserName>
                  <Feedback.Subtitle>Owner, Ikirakenne Ltd</Feedback.Subtitle>
                </UserInfo>
              </div>
              <div style={{ display: "inline !important" }}>
                <CommentBox>
                  <Feedback.Text>5.0</Feedback.Text>
                  <Rating pb="15px">
                    <RatingSingle active={true}>
                      <i className="fa fa-star" />
                    </RatingSingle>
                    <RatingSingle>
                      <i className="fa fa-star" />
                    </RatingSingle>
                    <RatingSingle>
                      <i className="fa fa-star" />
                    </RatingSingle>
                    <RatingSingle>
                      <i className="fa fa-star" />
                    </RatingSingle>
                    <RatingSingle>
                      <i className="fa fa-star" />
                    </RatingSingle>
                  </Rating>
                  <Feedback.Text>
                    With a talented team and a transparent working process, we
                    are always ready to move forwards with you on the way to
                    pursuing innovative ideas.
                  </Feedback.Text>
                </CommentBox>
                <UserInfo>
                  <img src={clientAvatar} alt="" />
                  <Feedback.UserName>Paulus Haverinen</Feedback.UserName>
                  <Feedback.Subtitle>Owner, Ikirakenne Ltd</Feedback.Subtitle>
                </UserInfo>
              </div>
              <div style={{ display: "inline !important" }}>
                <CommentBox>
                  <Feedback.Text>5.0</Feedback.Text>
                  <Rating pb="15px">
                    <RatingSingle active={true}>
                      <i className="fa fa-star" />
                    </RatingSingle>
                    <RatingSingle>
                      <i className="fa fa-star" />
                    </RatingSingle>
                    <RatingSingle>
                      <i className="fa fa-star" />
                    </RatingSingle>
                    <RatingSingle>
                      <i className="fa fa-star" />
                    </RatingSingle>
                    <RatingSingle>
                      <i className="fa fa-star" />
                    </RatingSingle>
                  </Rating>
                  <Feedback.Text>
                    With a talented team and a transparent working process, we
                    are always ready to move forwards with you on the way to
                    pursuing innovative ideas.
                  </Feedback.Text>
                </CommentBox>
                <UserInfo>
                  <img src={clientAvatar} alt="" />
                  <Feedback.UserName>Paulus Haverinen</Feedback.UserName>
                  <Feedback.Subtitle>Owner, Ikirakenne Ltd</Feedback.Subtitle>
                </UserInfo>
              </div>
            </Slider>
          </SliderWrapper>
        </Row>
      </Container>
    </Feedback>
  );
}
