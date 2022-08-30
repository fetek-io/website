import React from "react";
import { Navbar } from "react-bootstrap";
import siteBrandDark from "~image/logo/logo-black.png";
import siteBrandLight from "~image/logo/logo-white.png";
import favicon from "~image/mixed/favicon.png";
import Menu from "./Menu";
const SiteNavbar = ({
  buttonBlock,
  darkLogo,
  customLogo,
  defaultLogo,
  isTextLogo,
}) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="site-navbar"
      >
        <Navbar.Brand href="/">
          {isTextLogo ? (
            <span style={{ color: darkLogo ? "black" : "white" }}>
              <img src={favicon} />
              FETEK
            </span>
          ) : defaultLogo ? (
            <img src={defaultLogo} alt="site-brand" />
          ) : customLogo ? (
            <img src={customLogo} alt="site-brand" />
          ) : (
            <img
              src={darkLogo ? siteBrandDark : siteBrandLight}
              alt="site-brand"
            />
          )}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="hamburgur"
        />
        <Menu />
        {buttonBlock}
      </Navbar>
    </>
  );
};

export default SiteNavbar;
