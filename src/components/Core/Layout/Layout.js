import React from "react";
import { Helmet } from "react-helmet";
import favicon from "~image/mixed/favicon.png";
import Header from "../Header";
export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>FETEK</title>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <Header />
      {children}
    </>
  );
}
