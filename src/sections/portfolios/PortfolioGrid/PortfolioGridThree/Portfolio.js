import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PortfolioCard from "./Components/Card";
import Portfolio from "./style";
import { Images } from "~data";
// import portfolioData from "./data";

const portfolioData = [
  {
    image: Images.DigiTalagency.portFolioImg1,
    titleSmall: "KAKTUS",
    title: "Candy Store",
    id: "1",
    tagi: ["all", "development"],
  },
  {
    image: Images.DigiTalagency.portFolioImg2,
    titleSmall: "KAKTUS",
    title: "Candy Store",
    id: "2",
    tagi: ["all"],
  },
  {
    image: Images.DigiTalagency.portFolioImg3,
    titleSmall: "KAKTUS",
    title: "Candy Store",
    id: "3",
    tagi: ["all"],
  },
  {
    image: Images.DigiTalagency.portFolioImg3,
    titleSmall: "KAKTUS",
    title: "Candy Store",
    id: "4",
    tagi: ["seo"],
  },
  {
    image: Images.DigiTalagency.portFolioImg3,
    titleSmall: "KAKTUS",
    title: "Candy Store",
    id: "5",
    tagi: ["development"],
  },
  {
    image: Images.DigiTalagency.portFolioImg3,
    titleSmall: "KAKTUS",
    title: "Candy Store",
    id: "6",
    tagi: ["work"],
  },
  {
    image: Images.DigiTalagency.portFolioImg1,
    titleSmall: "KAKTUS",
    title: "Candy Store",
    id: "7",
    tagi: ["marketing"],
  },
  {
    image: Images.DigiTalagency.portFolioImg1,
    titleSmall: "KAKTUS",
    title: "Candy Store",
    id: "7",
    tagi: ["work"],
  },
];

const FilterButton = ({ name, handleSetTag, tagActive, children }) => {
  return (
    <Portfolio.NavItem
      className={`btn-reset ${tagActive === name ? "active" : ""}`}
      onClick={() => handleSetTag(name)}
    >
      {children}
    </Portfolio.NavItem>
  );
};

export default function PortfolioSection({ gutters, containerFluid, ...rest }) {
  const [tag, setTag] = React.useState("all");
  const [filteredImages, setFilteredImages] = React.useState([]);

  React.useEffect(() => {
    tag === "all"
      ? setFilteredImages(portfolioData)
      : setFilteredImages(
          portfolioData.filter((image) =>
            image.tagi.find((item) => item === tag)
          )
        );
  }, [tag]);
  return (
    <Portfolio {...rest}>
      <Container fluid={containerFluid}>
        <Row className="align-items-center justify-content-center">
          <Col xs="12" className="col-xl-7 col-lg-5 col-md-8 col-xs-9">
            <Portfolio.Box mbLG="45px" mb="10px">
              <Portfolio.Subtitle as="h4" fontColor="#fd346e" mb="13px">
                Portfolio
              </Portfolio.Subtitle>
              <Portfolio.Title as="h2">Works we are proud of</Portfolio.Title>
            </Portfolio.Box>
          </Col>
          <Col xs="12" className="col-xl-5 col-lg-7 col-md-8">
            <Portfolio.Nav className="mb-5 mb-lg-0">
              <FilterButton
                className="is-checked"
                name="all"
                tagActive={tag}
                handleSetTag={setTag}
              >
                All
              </FilterButton>
              <FilterButton name="work" tagActive={tag} handleSetTag={setTag}>
                Design
              </FilterButton>
              <FilterButton
                name="development"
                tagActive={tag}
                handleSetTag={setTag}
              >
                {" "}
                Development
              </FilterButton>
              <FilterButton
                name="marketing"
                tagActive={tag}
                handleSetTag={setTag}
              >
                {" "}
                Marketing
              </FilterButton>
              <FilterButton name="seo" tagActive={tag} handleSetTag={setTag}>
                SEO
              </FilterButton>
            </Portfolio.Nav>
          </Col>
        </Row>
        <Row className={`justify-content-center ${!gutters ? "gx-0" : null}`}>
          {portfolioData.map(({ image }, index) => {
            return (
              <Portfolio.Box
                mb={gutters ? "25px" : null}
                className="col-lg-4 col-xs-10 p-5"
                key={index + "pp"}
              >
                <PortfolioCard
                  image={image}
                  to="/portfolio/default"
                  title="Agency Brand guide & Development"
                  text="UX and UI, Design, Development"
                />
              </Portfolio.Box>
            );
          })}
        </Row>
        <Portfolio.Box className="text-center" mt="30px">
          <Portfolio.Button className="btn-primary">Load More</Portfolio.Button>
        </Portfolio.Box>
      </Container>
    </Portfolio>
  );
}
