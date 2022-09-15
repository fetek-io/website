import React from "react";
import { PageWrapper } from "~components";
import HeroSection from "~sections/OurServices/Hero";
import ContentSection from "~sections/OurServices/Content";

import FooterThree from "~sections/it/FooterThree";

export default function DataPage() {
  return (
    <PageWrapper innerPage={true}>
      <HeroSection />
      <ContentSection />
      <FooterThree />
    </PageWrapper>
  );
}
