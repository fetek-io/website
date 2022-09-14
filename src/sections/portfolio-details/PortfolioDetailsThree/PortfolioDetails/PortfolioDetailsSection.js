import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StaticImage as Img } from "gatsby-plugin-image";
import PortfolioDetails from "./style";
import { Link } from "gatsby";
import {
  getProject,
  getNextProject,
  getPreviousProject,
} from "~services/projectServices";
import { useQuery } from "react-query";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function PortfolioDetailsSection({ params }) {
  const { data, isLoading: loading } = useQuery([params?.keyword], () =>
    getProject({
      keyword: params?.keyword,
    })
  );

  const project = data?.data?.items[0]?.fields;

  console.log("project :>> ", project);
  return (
    <PortfolioDetails backgroundColor="#f3f4f6">
      <Container>
        <PortfolioDetails.Image>
          <img
            src={project?.image?.fields?.file?.url}
            alt="portfolio"
            layout="constrained"
            placeholder="blurred"
            style={{ width: "100%", height: "auto" }}
          />
        </PortfolioDetails.Image>
        <Row className="align-items-center">
          <Col xs="12" className="col-xxl-7 col-xl-8 col-lg-7">
            <PortfolioDetails.Box>
              <PortfolioDetails.Title as="h2">
                PROJECT INFORMATION
              </PortfolioDetails.Title>
              <div
                style={{
                  letterSpacing: "normal",
                  lineHeight: "32px",
                }}
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(project?.description),
                }}
              ></div>
            </PortfolioDetails.Box>
          </Col>
          <Col xs="12" className="col-xxl-4 offset-xxl-1 col-xl-4 col-lg-5">
            <PortfolioDetails.Box>
              <PortfolioDetails.List as="ul">
                <li>
                  <span>Project Name:</span>
                  {project?.name}
                </li>
                <li>
                  <span>Client:</span>
                  {project?.client}
                </li>
                <li>
                  <span>Finshing Date:</span>
                  {new Date(project?.finishDate).toDateString()}
                </li>
                <li>
                  <span>Duration:</span>
                  {project?.duration}
                </li>
                <li>
                  <span>Category:</span>
                  {project?.category && project?.category?.length > 1
                    ? project?.category
                        ?.map((item) => item?.fields?.name)
                        .join(" , ")
                    : project?.category[0].fields.name}
                </li>
              </PortfolioDetails.List>
            </PortfolioDetails.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {project?.additionalmage?.map(
            (item, index) =>
              index === 0 && (
                <Col className="col-md-12 col-xs-10">
                  <PortfolioDetails.BigImage
                    mb="25px"
                    mt="50px"
                    className="text-center"
                  >
                    <a
                      className="portfolio__single popup-img"
                      data-fancybox="images"
                    >
                      <img
                        src={item?.fields?.file?.url}
                        alt="portfolio"
                        layout="constrained"
                        placeholder="blurred"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </a>
                  </PortfolioDetails.BigImage>
                </Col>
              )
          )}

          {project?.additionalmage?.map(
            (item, index) =>
              index !== 0 && (
                <Col xs="12" className="col-xl-4" key={index}>
                  {/* Single Grid */}
                  <PortfolioDetails.GridImage mb="30px" mbLG="0">
                    <a
                      className="portfolio__single popup-img"
                      data-fancybox="images"
                    >
                      <img
                        src={item?.fields?.file?.url}
                        alt="portfolio"
                        layout="constrained"
                        placeholder="blurred"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </a>
                  </PortfolioDetails.GridImage>
                  {/*/ .Single Grid */}
                </Col>
              )
          )}
        </Row>
        <PortfolioDetails.ButtonGroup mtLG="50px" mt="30px">
          <a className="btn-link" as={Link} to="/">
            <i className="fa fa-arrow-left" />
            Previous project
          </a>
          <a className="btn-link" as={Link} to="/">
            Next project
            <i className="fa fa-arrow-right" />
          </a>
        </PortfolioDetails.ButtonGroup>
      </Container>
    </PortfolioDetails>
  );
}
