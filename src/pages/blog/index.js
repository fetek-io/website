import React from "react";
import { BlogSidebarTwo } from "~sections/Blog";
import FooterThree from "~sections/it/FooterThree";
import { PageWrapper } from "~components/Core";
import * as queryString from "query-string";

export default function BlogPage({ location }) {
  const { badge, authorId } = queryString.parse(location.search);

  return (
    <PageWrapper innerPage={true}>
      <BlogSidebarTwo badge={badge} authorId={authorId} />
      <FooterThree />
    </PageWrapper>
  );
}
