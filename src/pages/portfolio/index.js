import React from "react";
import { PageWrapper } from "~components/Core";
import PortfolioSection from "~sections/portfolios/PortfolioGrid/PortfolioGridThree";
import FooterThree from "~sections/it/FooterThree";

import * as queryString from "query-string";

export default function OurPortfolio({ location }) {
  const { category } = queryString.parse(location.search);
  return (
    <PageWrapper innerPage={true}>
      <PortfolioSection category={category} />
      <FooterThree />
    </PageWrapper>
  );
}
