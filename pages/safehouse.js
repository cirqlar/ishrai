import matter from "gray-matter";
import PageBuilder from "../components/builder/builder";

import PageTitle from "../components/layout/pageTitle";
import StyledMarkdown from "../components/markdown/styledMarkdown";
import PageHeading from "../components/shared/page_heading";

export default function Safehouse({ content, sections }) {
  return (
    <>
      <PageTitle title="Safehouse Program" />
      <PageHeading heading="Safehouse Program" />
      <div className="page-padding py-12 text-center flex flex-col items-center">
        <StyledMarkdown children={content} />
      </div>
      <PageBuilder sections={sections} />
    </>
  );
}

export async function getStaticProps() {
  let safehouseFile = await import("../page_data/safehouse.md");
  let safehouseData = matter(safehouseFile.default);

  return {
    props: {
      content: safehouseData.content,
      sections: safehouseData?.data?.sections,
    },
  };
}