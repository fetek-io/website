import React, { useState } from "react";
import Slider from "react-slick";
import { Images } from "~data";
import { Col, Container, Row } from "react-bootstrap";
import GreatWork from "./style";
import firstForte from "~assets/image/custom/forte1.png";
import secondForte from "~assets/image/custom/forte2.png";
import thirdForte from "~assets/image/custom/forte3.png";
import ArrowLeft from "~assets/image/custom/arrow-left.inline.svg";
import ArrowRight from "~assets/image/custom/arrow-right.inline.svg";
import styled from "styled-components";
import SectionTitle from "./Components/SectionTitle";
import { Box } from "~styled";
import { Link } from "~components";

const SliderWrapper = styled(Box)`
  .slick-list {
    transform: translate(0, 15%) !important;
  }

  @media (max-width: 1200px) {
    .slick-dots {
      bottom: -75px;
    }
  }
`;

const ImageContainer = styled.div`
  padding: 20px;
  margin: auto;
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

const WorkTabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0px 0px 0px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const WorkTab = styled.div`
  cursor: pointer;
  padding: 23px 40px;
  &.active {
    border: 2px solid #292525;
    border-radius: 1000px;
  }
`;

const WorkText = styled.p`
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.colors.white};
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
        top: "50%",
        left: "-20px",
        zIndex: 100,
      }}
      onClick={() => {
        elSlider.current.slickPrev();
      }}
    >
      <span style={{ color: "#7BC0E3" }}>
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
        top: "50%",
        right: "-40px",
        zIndex: 100,
      }}
      onClick={() => {
        elSlider.current.slickNext();
      }}
    >
      <span style={{ color: "#7BC0E3" }}>
        <ArrowRight />
      </span>
    </button>
  );
};

const tabs = [
  {
    id: 1,
    name: "Website Optimization",
    items: [
      {
        img: firstForte,
        content:
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
      },
      {
        img: firstForte,
        content:
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
      },
      {
        img: firstForte,
        content:
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
      },
    ],
  },
  {
    id: 2,
    name: "Website Redesign",
    items: [
      {
        img: secondForte,
        content:
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
      },
      {
        img: secondForte,
        content:
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
      },
      {
        img: secondForte,
        content:
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
      },
    ],
  },
  {
    id: 3,
    name: "Search Engine Optimization",
    items: [
      {
        img: thirdForte,
        content:
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
      },
      {
        img: thirdForte,
        content:
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
      },
      {
        img: thirdForte,
        content:
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
      },
    ],
  },
];

export default function GreatworkSection() {
  const elSlider = React.useRef();
  const [tabActive, setTabActive] = useState(1);
  const [content, setContent] = useState(tabs[0].items);

  // $screen-xxs: 320px;
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
    nextArrow: <NextArrow elSlider={elSlider} />,
    prevArrow: <PreviousArrow elSlider={elSlider} />,
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
          nextArrow: <NextArrow elSlider={elSlider} />,
          prevArrow: <PreviousArrow elSlider={elSlider} />,
        },
      },
    ],
  };

  return (
    <GreatWork
      backgroundColor="#60E1CB"
      style={{ backgroundImage: "linear-gradient(#60E1CB 60%, white 50%)" }}
    >
      <Container>
        <SectionTitle
          title={`Our Great Work`}
          subTitleProps={{ mb: "27px" }}
          titleProps={{ mb: "10px", as: "h2" }}
          mb="69px"
          className="text-center"
        ></SectionTitle>
        <WorkTabContainer>
          {tabs.map((item) => {
            return (
              <WorkTab
                className={tabActive === item.id ? "active" : undefined}
                key={item.id}
                onClick={() => {
                  setTabActive(item.id);
                  setContent(item.items);
                }}
              >
                <WorkText>{item.name}</WorkText>
              </WorkTab>
            );
          })}
        </WorkTabContainer>
        <Row
          className="align-items-center justify-content-center justify-content-md-start"
          style={{ paddingBottom: "138px" }}
        >
          <SliderWrapper>
            <Slider ref={elSlider} {...sliderConfig}>
              {content.map((item, index) => (
                <Link className="pointer" to="/portfolio/default" key={index}>
                  <ImageContainer>
                    <ForteImage src={item.img} alt="our forte" />

                    <GreatWork.Text>{item.content}</GreatWork.Text>
                  </ImageContainer>
                </Link>
              ))}
            </Slider>
          </SliderWrapper>
        </Row>
      </Container>
    </GreatWork>
  );
}
