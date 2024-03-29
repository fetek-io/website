import { Link } from "~components";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Images } from "~data";
import Footer from "./style";
export default function FooterTwo() {
  return (
    <Footer>
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
            <Col xs="12" className="col-xl-8">
              <Row>
                <Col xs="12" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Company</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <a href="#">About us</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Privacy Policy</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Terms &amp; Conditions</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Rider</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Contact</a>
                      </Footer.ListItems>
                    </Footer.List>
                  </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Contact Details</Footer.Title>
                    <Footer.Address className="widgets-address">
                      <Footer.AddressItem>
                        <i className="fa fa-map-marker-alt" />
                        <span>
                          Amsterdam <br className="d-block" />
                          Netherlands
                        </span>
                      </Footer.AddressItem>
                      <Footer.AddressItem>
                        <i className="fa fa-phone-alt" />

                        <a href="#">
                          +31 62 19 22 705
                          <span className="d-block">
                            {" "}
                            7 Days - 8am - 10pm{" "}
                          </span>{" "}
                        </a>
                      </Footer.AddressItem>
                      <Footer.AddressItem>
                        <i className="fa fa-envelope" />
                        <a href="mailto:info@medcartel.com">
                          info@medcartel.com
                        </a>
                      </Footer.AddressItem>
                    </Footer.Address>
                  </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-md-4 col-xs-7">
                  <Footer.Widgets>
                    <Footer.Title>Follow us on social media</Footer.Title>
                    <Footer.Text>
                      Get the latest trends updates right at your inbox.
                    </Footer.Text>
                    <Footer.SocialShare>
                      <Footer.Box pt="11px" pb="30px">
                        <Footer.SocialShareItem>
                          <a href="#">Facebook</a>
                        </Footer.SocialShareItem>
                        <Footer.SocialShareItem>
                          <a href="#">Twitter</a>
                        </Footer.SocialShareItem>
                        <Footer.SocialShareItem>
                          <a href="#">Instagram</a>
                        </Footer.SocialShareItem>
                      </Footer.Box>
                    </Footer.SocialShare>
                    <Footer.Payment>
                      <img
                        className="w-100"
                        src={Images.footerTwo.PaymentImg}
                      ></img>
                    </Footer.Payment>
                  </Footer.Widgets>
                </Col>
              </Row>
            </Col>
          </Row>
        </Footer.Box>
        <Footer.Copyright>
          <Footer.CopyrightText>
            © 2021 Fastland By FinestDevs. All Rights Reserved
          </Footer.CopyrightText>
        </Footer.Copyright>
      </Container>
    </Footer>
  );
}
