import React from "react";
import ContactSection from "~sections/contact/ContactOne/ContactSection";
import FooterThree from "~sections/it/FooterThree";
import { PageWrapper } from "~components/Core";

export default function contactOne() {
  return (
    <PageWrapper innerPage={true}>
      <ContactSection />
      <FooterThree />
    </PageWrapper>
  );
}
