import React from "react";
import { PageWrapper } from "~components/Core";
import PortfolioSection from "./PortfolioGridThree";
import FooterThree from "~sections/it/FooterThree";
import l6teamImg3 from "~image/custom/software-service.jpeg";

export default function OurPortfolio({ location }) {
  return (
    <PageWrapper innerPage={true}>
      <PortfolioSection 
        name={"Data services"}
        description={"Data services are part of cloud-native application development and open hybrid cloud IT strategies"}
        image={l6teamImg3}
        downladLink={"https://www.dot.nd.gov/manuals/design/caddmanual/UG_Meetings/Adobe%20Portfolio%20Guide.pdf"}
      />
      <FooterThree />
    </PageWrapper>
  );
}
