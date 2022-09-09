import { Link } from "~components";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Images } from "~data";
import Footer from "./style";
export default function FooterThree() {
  return (
    <Footer backgroundColor="#60E1CB">
      <Container>
        <Footer.Box pbXL="95px">
          <Row>
            <Col xs="12" className="col-lg-4 col-md-8 col-xs-10">
              <Footer.Widgets className="footer-widgets footer-widgets--l7">
                {/* Brand Logo*/}
                <Footer.Box mb="30px">
                  <Link to="#">
                    <img
                      src={Images.FooterSix.LogoBlack}
                      alt="logo"
                      style={{ width: "100px", height: "50px" }}
                    />
                  </Link>
                </Footer.Box>
                <Footer.Text mb="36px">
                  With a experienced talent team,
                  <br className="d-none d-xl-block" /> Fetek will be a reputable
                  technology partner to maximize the development
                  <br className="d-none d-xl-block" /> of your business
                </Footer.Text>
              </Footer.Widgets>
            </Col>
            <Col xs="12" className="col-lg-8">
              <Row>
                <Col xs="12" className="col-lg-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Work</Footer.Title>
                    <Footer.Address className="widgets-address">
                      <Footer.AddressItem>
                        <span>Blog</span>
                      </Footer.AddressItem>
                      <Footer.AddressItem>
                        <a href="#">How We Work</a>
                      </Footer.AddressItem>
                      <Footer.AddressItem>
                        <a>Testimonial</a>
                      </Footer.AddressItem>
                    </Footer.Address>
                  </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-lg-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <a href="#">Marketing Strategy</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Website Optimization</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Email Marketing</a>
                      </Footer.ListItems>
                    </Footer.List>
                  </Footer.Widgets>
                </Col>

                <Col xs="12" className="col-lg-4 col-xs-7">
                  <Footer.Widgets>
                    <Footer.Title>Business Solution</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <a href="#">Partnership</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">About Project</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Corporate</a>
                      </Footer.ListItems>
                    </Footer.List>
                  </Footer.Widgets>
                </Col>
              </Row>
            </Col>
          </Row>
        </Footer.Box>
        <Footer.Copyright>
          <Footer.CopyrightText>© 2022 FeTek</Footer.CopyrightText>
          <Footer.SocialShare>
            <Footer.SocialShareItem>
              <a href="#">
                <i className="fab fa-facebook-square" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a href="#">
                <i className="fab fa-linkedin" />
              </a>
            </Footer.SocialShareItem>
          </Footer.SocialShare>
        </Footer.Copyright>
      </Container>
    </Footer>
  );
}
