import React from "react";
import Services from "./style";
import SectionTitle from "./Components/SectionTitle";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCard from "./Components/Card";
import ServicesCardTwo from "./Components/CardTwo";
import { ServiceDataIt } from "~data";
import { Link } from "~components";
export default function ServicesSection({ data }) {
  return (
    <Services backgroundColor="#ffffff">
      <Services.Container id="services-section">
        <Row className="justify-content-center justify-content-md-center">
          <Col className="col-xxl-6 col-xl-7 col-md-9 col-sm-10">
            <SectionTitle
              subTitle={data.subtitle}
              title={data.title}
              subTitleProps={{ mb: "27px" }}
              titleProps={{ mb: "10px", as: "h2" }}
              mb="69px"
              className="text-center"
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          {data.items.map(({ name, description, to, icon, iconBackground }) => {
            return (
              <Services.Box
                mb="25px"
                xs="12"
                className="col-xl-4 col-lg-4 col-md-6 col-sm-9 col-xs-10"
                key={name}
              >
                <ServicesCard
                  title={name}
                  text={description}
                  icon={icon}
                  to={to}
                  iconBackground={iconBackground}
                />
              </Services.Box>
            );
          })}
          {/* <Services.Box mb="25px" xs="12" className="col-xl-3 col-lg-4 col-md-6 col-sm-9 col-xs-10">
        <ServicesCardTwo/>
      </Services.Box> */}
        </Row>
      </Services.Container>
    </Services>
  );
}
