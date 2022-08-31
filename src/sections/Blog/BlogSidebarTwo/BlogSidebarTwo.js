import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Images } from "~data";
import BlogRequlerData from "~data/BlogRequlerData";
import Sidebar from "~sections/Blog/Sidebar";
import BlogCard from "./Comonent/Card";
import Blog from "./style";
import { findBlogs } from "~services/blogServices";
import { getPage } from "~util/MyUtil";
import { useQuery } from "react-query";

const getPages = (total) => {
  let content = [];
  for (let i = 0; i < total; i++) {
    content.push(<li key={i}>{i + 1}</li>);
  }
  return content;
};

export default function BlogRegular() {
  const { data } = useQuery("findBlogs", findBlogs);

  return (
    <Blog backgroundColor="#f9fafc">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-8 text-center">
            <Blog.Box mb="63px">
              <Blog.Subtitle as="h6" fontColor="#5034fc">
                All about software development
              </Blog.Subtitle>
              <Blog.Title as="h2">FETEK blog </Blog.Title>
            </Blog.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12" className="col-xl-8 col-lg-7">
            <Row className="justify-content-center">
              <Col xs="12">
                {data?.data?.items && data?.data?.items.length > 0 && (
                  <BlogCard
                    image={
                      data?.data?.items[0]?.fields?.banner?.fields?.file?.url
                    }
                    badge={data?.data?.items[0]?.fields.badge}
                    date={data?.data?.items[0]?.sys?.createdAt}
                    title={data?.data?.items[0]?.fields?.title}
                    user={data?.data?.items[0]?.fields.author.fields.name}
                  />
                )}
              </Col>
              {data?.data?.items?.map(({ fields, sys }, index) => {
                return (
                  <Col
                    xs="12"
                    className="col-xl-6 col-lg-9 col-md-7 col-xs-10"
                    key={"bsp" + index}
                  >
                    <BlogCard
                      image={fields?.banner?.fields?.file?.url}
                      badge={fields.badge}
                      date={sys?.createdAt}
                      title={fields?.title}
                      user={fields.author.fields.name}
                    />
                  </Col>
                );
              })}
            </Row>
            <Blog.Box mtLG="50px" mt="30px">
              <Row className="justify-content-xl-center">
                <Col xs="12" className="col-xl-8">
                  <Blog.Paginations className="list-unstyled text-xl-center mx-auto">
                    <li>
                      <a href="#">
                        <i className="fa fa-chevron-left" />
                      </a>
                    </li>
                    {getPages(getPage(data?.data?.total))}
                    <li>
                      <a href="#">
                        <i className="fa fa-chevron-right" />
                      </a>
                    </li>
                  </Blog.Paginations>
                </Col>
              </Row>
            </Blog.Box>
          </Col>
          <Col
            xs="12"
            className="col-xl-4 col-lg-5 col-md-7 col-xs-10 mt-5 mt-lg-0"
          >
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </Blog>
  );
}
