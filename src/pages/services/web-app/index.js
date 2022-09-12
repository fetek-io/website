import React from "react";
import { PageWrapper } from "~components";
import HeroSection from "~sections/OurServices/Hero";
import RightParagraphSection from "~sections/OurServices/RightParagraph";

import styled from "styled-components";
import { Heading, Paragraph } from "~styled";
import { Col, Container, Row } from "react-bootstrap";
import FooterThree from "~sections/it/FooterThree";

const Title = styled(Heading)`
  font-size: 38px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.2068;
  margin-bottom: 21px;
  color: #25373f;
  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 992px) {
    font-size: 58px;
  }
`;

const SmallTitle = styled(Heading)`
  font-size: 25px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.2068;
  margin-bottom: 21px;
  color: #25373f;
  @media (min-width: 768px) {
    font-size: 35px;
  }

  @media (min-width: 992px) {
    font-size: 45px;
  }
`;

const Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.875;
  margin-bottom: 10px;
`;

export default function WebApp() {
  return (
    <PageWrapper innerPage={true}>
      <HeroSection />
      <div style={{ marginTop: "160px" }}>
        <Row
          className="align-items-center justify-content-center"
          style={{ marginBottom: "32px" }}
        >
          {/* Welcome content Area */}
          <Col
            xs="12"
            className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-xs-11 text-center"
          >
            <SmallTitle>WEBSITE DEVELOPMENT</SmallTitle>
            <Text>
              When it comes to developing your website, AgileTech focuses on
              User Experience to bring about full‐scale solutions that optimize
              for both desktop & mobile browsers. Continuous improvement is what
              we always keep in mind.
            </Text>
          </Col>
        </Row>

        <RightParagraphSection />
        <RightParagraphSection isLeftContent={true} />
        <RightParagraphSection />
        <RightParagraphSection isLeftContent={true} />
      </div>
      <FooterThree />
    </PageWrapper>
  );
}
