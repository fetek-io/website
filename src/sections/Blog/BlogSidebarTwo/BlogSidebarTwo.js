import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Images } from "~data";
import BlogRequlerData from "~data/BlogRequlerData";
import Sidebar from "~sections/Common/Sidebar";
import BlogCard from "./Comonent/Card";
import Blog from "./style";
import { findBlogs, getAuthor } from "~services/blogServices";
import { getPage } from "~util/MyUtil";
import { useQuery } from "react-query";
import cls from "classnames";

const limit = 10;

const getPages = (total, handleChangeOffset, offset) => {
  let content = [];
  for (let i = 0; i < total; i++) {
    content.push(
      <li
        className={cls("pointer", offset / limit === i ? " active" : undefined)}
        key={i}
        onClick={() => {
          handleChangeOffset(i + 1);
        }}
      >
        {i + 1}
      </li>
    );
  }
  return content;
};

export default function BlogRegular({ badge, authorId }) {
  const [offset, setOffset] = useState(0);

  const { data, isLoading: loading } = useQuery(
    ["findBlogs", limit, offset, badge, authorId],
    () =>
      findBlogs({
        limit: limit,
        offset: offset,
        badge: badge,
        authorId: authorId,
      })
  );

  const { data: authorInfo } = useQuery(
    ["getAuthor", authorId],
    () => getAuthor({ id: authorId }),
    {
      // ⬇️ disabled as long as the keyword is empty
      enabled: !!authorId,
    }
  );

  const handleChangeOffset = (page) => {
    setOffset(page * limit - limit);
  };

  return (
    <Blog backgroundColor="#f9fafc">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-8 text-center">
            <Blog.Box mb="63px">
              <Blog.Subtitle as="h6" fontColor="#7BC0E3">
                All about software development
              </Blog.Subtitle>
              <Blog.Title as="h2">FETEK blog </Blog.Title>
              {badge && <Blog.Title as="h6">Tag: {badge} </Blog.Title>}
              {authorInfo?.data?.items?.[0]?.fields?.name && (
                <Blog.Title as="h6">
                  Author: {authorInfo?.data?.items?.[0]?.fields?.name}{" "}
                </Blog.Title>
              )}
            </Blog.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            xs="12"
            className="col-xl-8 col-lg-7"
            style={{ position: "relative" }}
          >
            {loading && <div className="fancybox-loading"></div>}
            {!loading && (
              <>
                {data?.data?.items && data?.data?.items.length === 0 && (
                  <Blog.Subtitle
                    as="h6"
                    style={{
                      position: "absolute",
                      top: "15%",
                      textAlign: "center",
                    }}
                  >
                    Nothing Found <br />
                    Sorry, but nothing matched your search terms. Please try
                    again with some different keywords.
                  </Blog.Subtitle>
                )}

                {data?.data?.items && data?.data?.items.length > 0 && (
                  <>
                    <Row className="justify-content-center">
                      <Col xs="12">
                        <BlogCard
                          image={
                            data?.data?.items[0]?.fields?.banner?.fields?.file
                              ?.url
                          }
                          badge={data?.data?.items[0]?.fields.badge}
                          date={data?.data?.items[0]?.sys?.createdAt}
                          title={data?.data?.items[0]?.fields?.title}
                          user={data?.data?.items[0]?.fields.author.fields.name}
                          keyword={data?.data?.items[0]?.fields?.keyword}
                        />
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
                              keyword={fields?.keyword}
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
                              <a
                                href="#"
                                onClick={() => {
                                  handleChangeOffset(
                                    (offset + limit) / limit - 1
                                  );
                                }}
                              >
                                <i className="fa fa-chevron-left" />
                              </a>
                            </li>
                            {getPages(
                              getPage(data?.data?.total, limit),
                              handleChangeOffset,
                              offset
                            )}
                            <li>
                              <a
                                href="#"
                                onClick={() => {
                                  handleChangeOffset(
                                    (offset + limit) / limit + 1
                                  );
                                }}
                              >
                                <i className="fa fa-chevron-right" />
                              </a>
                            </li>
                          </Blog.Paginations>
                        </Col>
                      </Row>
                    </Blog.Box>
                  </>
                )}
              </>
            )}
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
