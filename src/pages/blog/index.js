import React from "react";
import { BlogSidebarTwo } from "~sections/Blog";
import FooterSection from "~sections/Blog/Footer";
import { PageWrapper } from "~components/Core";
import * as queryString from "query-string";

export default function BlogPage({ location }) {
  const { badge, authorId } = queryString.parse(location.search);

  return (
    <PageWrapper innerPage={true}>
      <BlogSidebarTwo badge={badge} authorId={authorId} />
      <FooterSection />
    </PageWrapper>
  );
}
