import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Details from "./style";
import Sidebar from "~sections/Common/Sidebar";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import { getBlog, getNextBlog, getPreviousBlog } from "~services/blogServices";
import { useQuery } from "react-query";
import { navigate } from "gatsby";

const handleGetNextBlog = async (blog) => {
  const res = await getNextBlog({ createdAt: blog?.sys?.createdAt });
  if (res?.data?.items?.[0]?.fields?.keyword) {
    navigate("/blog/" + res?.data?.items?.[0]?.fields?.keyword);
  }
};

const handleGetPreviousBlog = async (blog) => {
  const res = await getPreviousBlog({ createdAt: blog?.sys?.createdAt });

  if (res?.data?.items?.[0]?.fields?.keyword) {
    navigate("/blog/" + res?.data?.items?.[0]?.fields?.keyword);
  }
};

export default function BlogDetails({ params }) {
  const { data } = useQuery([params?.keyword], () =>
    getBlog({
      keyword: params?.keyword,
    })
  );

  const blog = data?.data?.items[0];

  return (
    <Details backgroundColor="#f9fafc" key={params?.keyword}>
      <Details.Box pb="60px" pbMD="80px" pbLG="130px">
        <Container>
          <Row className="justify-content-center">
            {blog && (
              <Col className="col-lg-7">
                <Details.Box mb="30px" mbLG="55px">
                  <Details.Title as="h1">{blog.fields.title}</Details.Title>
                  <Details.MetaInfo>
                    <Details.Link
                      to={`/blog/?authorId=${blog?.fields?.author?.sys?.id}`}
                      as={Link}
                    >
                      By {blog.fields.author.fields.name}
                    </Details.Link>
                    <Details.Link to="/" as={Link}>
                      {new Date(blog?.sys?.createdAt).toDateString()}
                    </Details.Link>
                  </Details.MetaInfo>
                </Details.Box>
                <Details.Box>
                  <Details.Image mb="35px" mbLG="55px">
                    <img
                      className="w-100"
                      src={blog?.fields?.banner?.fields?.file?.url}
                      alt="Blog"
                      layout="constrained"
                      placeholder="blurred"
                    />
                  </Details.Image>
                  <div
                    style={{
                      letterSpacing: "normal",
                      lineHeight: "32px",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: documentToHtmlString(blog?.fields?.content),
                    }}
                  ></div>
                  <Details.Tag mt="50px">
                    <Details.SubTitle mr="25px" mt="10px" as="h4">
                      Tags:
                    </Details.SubTitle>
                    <Details.TagList>
                      {blog?.fields?.tags.map((item, index) => {
                        return (
                          <li>
                            <Link to={`/blog/?badge=${item}`} key={index}>
                              {item}
                            </Link>
                          </li>
                        );
                      })}
                    </Details.TagList>
                  </Details.Tag>
                  <Details.Tag mt="30px">
                    <Details.SubTitle mr="25px" as="h4">
                      Share:
                    </Details.SubTitle>
                    <Details.SocialList>
                      <li>
                        <Link to="/">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fab fa-linkedin" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fab fa-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                    </Details.SocialList>
                  </Details.Tag>
                  <Details.Pagination mt="30px" mtLG="75px" mb="50px">
                    <Details.PrevButton>
                      <span
                        className="btn-link"
                        onClick={() => {
                          handleGetPreviousBlog(blog);
                        }}
                      >
                        <i className="fa fa-arrow-left" />
                        prev
                      </span>
                    </Details.PrevButton>
                    <Details.NextButton>
                      <span
                        className="btn-link"
                        onClick={() => {
                          handleGetNextBlog(blog);
                        }}
                      >
                        next
                        <i className="fa fa-arrow-right" />
                      </span>
                    </Details.NextButton>
                  </Details.Pagination>
                </Details.Box>
              </Col>
            )}

            <Col xs="12" className="col-xl-4 offset-xl-1 col-lg-5">
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </Details.Box>
    </Details>
  );
}
