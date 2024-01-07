import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PortfolioCard from "./Components/Card";
import Portfolio from "./style";
import { Images } from "~data";
// import portfolioData from "./data";
import { findProjects, getCategories } from "~services/projectServices";
import { getPage } from "~util/MyUtil";
import { useQuery } from "react-query";

import { navigate } from "gatsby";

const limit = 10;

export default function PortfolioSection({
  gutters,
  containerFluid,
  name,
  image,
  description,
  downladLink,
  ...rest
}) {
  const [tag, setTag] = React.useState("all");
  const [filteredImages, setFilteredImages] = React.useState([]);

  const [offset, setOffset] = useState(0);

  // const { data: categories } = useQuery(["getCategories"], () =>
  //   getCategories()
  // );

  // React.useEffect(() => {
  //   tag === "all"
  //     ? setFilteredImages(portfolioData)
  //     : setFilteredImages(
  //         portfolioData.filter((image) =>
  //           image.tagi.find((item) => item === tag)
  //         )
  //       );
  // }, [tag]);

  const handleChangeOffset = (page) => {
    setOffset(page * limit - limit);
  };

  // console.log("data :>> ", data);
  // console.log("categories :>> ", categories);
  return (
    <Portfolio {...rest}>
      <Container fluid={containerFluid}>
        <Row className="align-items-center justify-content-center">
          <Col xs="12" className="col-xl-7 col-lg-5 col-md-8 col-xs-9">
            <Portfolio.Box mbLG="45px" mb="10px">
              <Portfolio.Subtitle as="h4" fontColor="#fd346e" mb="13px">
                {name}
              </Portfolio.Subtitle>
              {/* <Portfolio.Title as="h2">{description}</Portfolio.Title> */}
            </Portfolio.Box>
          </Col>
        </Row>
        <Row className={`pa-5 justify-content-center ${!gutters ? "gx-0" : null}`}>
          <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6">
            <figure class="max-w-lg">
              <img src={image} class="h-auto max-w-full rounded-lg" alt="image description" />
            </figure>
          </Col>
          <Col xs="12" className="col-xl-6 col-lg-5 col-md-6 col-xs-6 d-flex flex-xs-column justify-content-around">
          <Portfolio.Title as="h2">{description}</Portfolio.Title>
            <Portfolio.Box className="text-center" mt="30px">
            <a href={downladLink} download target="_blank">
              <Portfolio.Button className="btn-primary">Download</Portfolio.Button>
              </a>
            </Portfolio.Box>
          </Col>
        </Row>
      </Container>
    </Portfolio>
  );
}
