import matter from "gray-matter";

import PageTitle from "../components/layout/pageTitle";
import StyledMarkdown from "../components/markdown/styledMarkdown";
import PageHeading from "../components/shared/page_heading";

export default function About({ content }) {
  return (
    <>
      <PageTitle title="Who We Are" />
      <PageHeading heading="Who We Are" />
      <div className="page-padding py-12 text-center flex flex-col items-center">
        <StyledMarkdown children={content} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  let aboutFile = await import("../page_data/about.md");
  let aboutData = matter(aboutFile.default);

  return {
    props: {
      content: aboutData.content,
    },
  };
}