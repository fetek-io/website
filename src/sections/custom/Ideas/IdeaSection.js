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

export default function IdeaSection() {
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
              <Idea.Subtitle>Get Started</Idea.Subtitle>
              <Idea.Title>YOUR RELIABLE TECHNOLOGY PARTNER</Idea.Title>
              <Idea.Text>
                With a talented team and a transparent working process, we are
                always ready to move forwards with you on the way to pursuing
                innovative ideas.
              </Idea.Text>
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
                <div>
                  <Idea.Subtitle style={{ marginBottom: "0px" }}>
                    YOUR RELIABLE TECHNOLOGY PARTNER
                  </Idea.Subtitle>
                  <Idea.Text>
                    With a talented team and a transparent working process, we
                    are always ready to move forwards with you on the way to
                    pursuing innovative ideas.
                  </Idea.Text>
                </div>
                <div>
                  <Idea.Subtitle style={{ marginBottom: "0px" }}>
                    YOUR RELIABLE TECHNOLOGY PARTNER
                  </Idea.Subtitle>
                  <Idea.Text>
                    With a talented team and a transparent working process, we
                    are always ready to move forwards with you on the way to
                    pursuing innovative ideas.
                  </Idea.Text>
                </div>
                <div>
                  <Idea.Subtitle style={{ marginBottom: "0px" }}>
                    YOUR RELIABLE TECHNOLOGY PARTNER
                  </Idea.Subtitle>
                  <Idea.Text>
                    With a talented team and a transparent working process, we
                    are always ready to move forwards with you on the way to
                    pursuing innovative ideas.
                  </Idea.Text>
                </div>
                <div>
                  <Idea.Subtitle style={{ marginBottom: "0px" }}>
                    YOUR RELIABLE TECHNOLOGY PARTNER
                  </Idea.Subtitle>
                  <Idea.Text>
                    With a talented team and a transparent working process, we
                    are always ready to move forwards with you on the way to
                    pursuing innovative ideas.
                  </Idea.Text>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/*/ .Welcome Content Area */}
      {/*Welcome Image Area */}
      <ImageContainer className="d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-block">
        <img
          src={IdeaImg}
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
