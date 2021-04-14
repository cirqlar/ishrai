import matter from "gray-matter";

import PageTitle from "../components/layout/pageTitle";
import EmptyState from "../components/shared/emptyState";
import PageHeading from "../components/shared/page_heading";

export default function Partners({ partners }) {
  return (
    <>
      <PageTitle title="Our Partners" />
      <PageHeading heading="Our Partners" />
      {partners && partners.length > 0 ? (
        <div className="page-padding py-12 text-center flex flex-col items-center">
          <div className="pt-6 flex flex-wrap justify-center items-start">
            {partners.map((partner) => (
              <a key={partner.name} href={partner.url} target="_blank" rel="noreferrer">
                <img className=" max-h-40 pb-6 pr-6" src={partner.image} alt={partner.name} />
              </a>
            ))}
          </div>
        </div>
      ) : (
        <EmptyState title="Partner Data is currently unavailable" />
      )}
    </>
  );
}

export async function getStaticProps() {
  let partnersFile = await import("../page_data/partners.md");
  let partnersData = matter(partnersFile.default);

  return {
    props: {
      partners: partnersData?.data?.partners,
    },
  };
}
