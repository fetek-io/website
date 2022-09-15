import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "~components/VideoModal";
import { Link } from "~components";
import Idea from "./style";
import { StaticImage as Img } from "gatsby-plugin-image";
import IdeaImg from "../../../assets/image/custom/working-remotely.png";
import styled from "styled-components";
import StepBarSection from "~sections/Common/StepBar";

const ImageContainer = styled.div`
  position: absolute;
  bottom: -17%;
  right: 0;
`;

export default function IdeaSection({ data }) {
  return (
    <Idea backgroundColor="#E9FBF8">
      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-start">
          {/* Welcome content Area */}
          <Col
            xs="12"
            className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-xs-12"
          >
            <div className="welcome-content welcome-content--l3 mb-7">
              <Idea.Subtitle>{data.subtitle}</Idea.Subtitle>
              <Idea.Title>{data.title}</Idea.Title>
              <Idea.Text>{data.description}</Idea.Text>
            </div>
            <div style={{ display: "flex" }}>
              <StepBarSection />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  marginLeft: "32px",
                }}
              >
                {data.steps.map((item, index) => (
                  <div>
                    <Idea.Subtitle style={{ marginBottom: "0px" }}>
                      {item.title}
                    </Idea.Subtitle>
                    <Idea.Text>{item.description}</Idea.Text>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/*/ .Welcome Content Area */}
      {/*Welcome Image Area */}
      <ImageContainer className="d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-block">
        <img
          src={data.image}
          alt="Ideaimg"
          layout="fullWidth"
          placeholder="none"
          style={{ width: "800px", height: "auto" }}
        />
      </ImageContainer>
      {/* <ImageGroup /> */}
      {/*/ .Welcome Image Area */}
    </Idea>
  );
}
