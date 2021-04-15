import matter from "gray-matter";
import PageBuilder from "../components/builder/builder";

import PageTitle from "../components/layout/pageTitle";
import StyledMarkdown from "../components/markdown/styledMarkdown";
import PageHeading from "../components/shared/page_heading";

export default function Donations({ content, sections }) {
  return (
    <>
      <PageTitle title="Donations" />
      <PageHeading heading="Donations" />
      <div className="page-padding py-12 text-center flex flex-col items-center">
        <StyledMarkdown children={content} />
      </div>
      <PageBuilder sections={sections} />
    </>
  );
}

export async function getStaticProps() {
  let donationsFile = await import("../page_data/donations.md");
  let donationsData = matter(donationsFile.default);

  return {
    props: {
      content: donationsData.content,
      sections: donationsData?.data?.sections,
    },
  };
}