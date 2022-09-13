import React from "react";
import BlogDetails from "~sections/Blog/BlogDetails";
import { PageWrapper } from "~components/Core";
import FooterThree from "~sections/it/FooterThree";

export default function blogsDetails({ params }) {
  return (
    <PageWrapper innerPage={true}>
      <BlogDetails params={params} />
      <FooterThree />
    </PageWrapper>
  );
}
