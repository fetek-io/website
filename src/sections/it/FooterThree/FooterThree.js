import { Link } from "~components";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Images } from "~data";
import Footer from "./style";

import footer from "~data/fetekData/footer";

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
                      src={footer.logo}
                      alt="logo"
                      style={{ width: "100px", height: "50px" }}
                    />
                  </Link>
                </Footer.Box>
                <Footer.Text mb="36px">{footer.description}</Footer.Text>
              </Footer.Widgets>
            </Col>
            <Col xs="12" className="col-lg-8">
              <Row>
                {footer.columns.map((item, index) => (
                  <Col xs="12" className="col-lg-4 col-xs-6" key={index}>
                    <Footer.Widgets>
                      <Footer.Title>{item.name}</Footer.Title>
                      <Footer.Address className="widgets-address">
                        {item.rows.map((row, index) => (
                          <Footer.AddressItem key={index}>
                            <Link to={row.to}>
                              <a href="#">{row.name}</a>
                            </Link>
                          </Footer.AddressItem>
                        ))}
                      </Footer.Address>
                    </Footer.Widgets>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Footer.Box>
        <Footer.Copyright>
          <Footer.CopyrightText>{footer.sign}</Footer.CopyrightText>
          <Footer.SocialShare>
            <Footer.SocialShareItem>
              <a href={footer.fb}>
                <i className="fab fa-facebook-square" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a href={footer.tw}>
                <i className="fab fa-twitter" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a href={footer.insta}>
                <i className="fab fa-instagram" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a href={footer.linkedIn}>
                <i className="fab fa-linkedin" />
              </a>
            </Footer.SocialShareItem>
          </Footer.SocialShare>
        </Footer.Copyright>
      </Container>
    </Footer>
  );
}
