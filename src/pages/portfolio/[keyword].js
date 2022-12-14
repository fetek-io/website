import React from "react";
import { PageWrapper } from "~components/Core";
import FooterThree from "~sections/it/FooterThree";
import PortfolioDetailsSection from "~sections/portfolio-details/PortfolioDetailsThree/PortfolioDetails";

export default function PortfolioDetail({ params }) {
  return (
    <PageWrapper innerPage={true}>
      <PortfolioDetailsSection params={params} />
      <FooterThree />
    </PageWrapper>
  );
}
