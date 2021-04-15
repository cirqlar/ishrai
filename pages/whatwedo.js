import matter from "gray-matter";

import ExIcon from "../components/icon_containers/extended_icons";
import PageTitle from "../components/layout/pageTitle";
import EmptyState from "../components/shared/emptyState";
import PageHeading from "../components/shared/page_heading";

export default function WhatWeDo({ items }) {

  return (
    <>
      <PageTitle title="What We Do" />
      <PageHeading heading="The Work we Do" />
      {items && items.length > 0 ? (
        <div className="page-padding py-12 text-center flex flex-col items-center bg-gray-200">
          <p className="text-sm pt-4">
            ISHRAI offers several services and interventions which borders on the following:
          </p>
          <div className="pt-6 max-w-3xl">
            {items.map((item, index) => (
              <ExIcon
                key={item.title}
                className="pb-8"
                icon={<img src={item.icon} alt={item.title} style={{maxWidth: "48px", maxHeight: "48px"}} />}
                title={item.title}
                text={item.description}
                alignRight={index % 2 != 0}
              />
            ))}
          </div>
        </div>
      ) : (
        <EmptyState title="There's no data available right now" />
      )}
    </>
  );
}

export async function getStaticProps() {
  let whatwedoFile = await import("../page_data/whatwedo.md");
  let whatwedoData = matter(whatwedoFile.default);

  return {
    props: {
      items: whatwedoData?.data?.item,
    },
  };
}
