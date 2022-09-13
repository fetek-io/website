import React from "react";
import { PageWrapper } from "~components/Core";
import PortfolioSection from "~sections/portfolios/PortfolioGrid/PortfolioGridThree";
import FooterThree from "~sections/it/FooterThree";

export default function OurPortfolio() {
  return (
    <PageWrapper innerPage={true}>
      <PortfolioSection />
      <FooterThree />
    </PageWrapper>
  );
}
