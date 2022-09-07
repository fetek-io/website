import React from "react";
import { PageWrapper } from "~components";
import HeaderButton from "~sections/it/Header";
import HeroSection from "~sections/custom/Hero";
import IdeaSection from "~sections/custom/Ideas";
import GreatworkSection from "~sections/custom/GreatWork";
import ServicesSection from "~sections/custom/Services";
import FeatureSection from "~sections/it/Feature";
// import ContentSectionOne from "~sections/it/ContentOne";
import ProcessSection from "~sections/it/Process";
import CtaSection from "~sections/it/Cta";
import TestimonialSection from "~sections/it/Testimonial";
import ContactSection from "~sections/it/Contact";
import FooterThree from "~sections/it/FooterThree";
import TechStackSection from "~sections/it/TechStack";
import ContentSectionOne from "~sections/services/ContentOne";

const header = {
  headerClasses:
    "site-header site-header--menu-start light-header site-header--with-border site-header--sticky",
  containerFluid: false,
  buttonBlock: (
    <HeaderButton
      btnLink="innerpage/contact/contact-1"
      className="ms-auto d-none d-xs-inline-flex"
      btnText="Contact us"
      mr="15px"
      mrLG="0"
    />
  ),
};

export default function Marketing() {
  return (
    <PageWrapper innerPage={true}>
      <HeroSection />
      <IdeaSection />
      <ServicesSection />
      {/* <TechStackSection /> */}
      <GreatworkSection />
      {/* <FeatureSection /> */}
      <ContentSectionOne />
      <ProcessSection />
      <CtaSection />
      <TestimonialSection />
      <ContactSection />
      <FooterThree />
    </PageWrapper>
  );
}
