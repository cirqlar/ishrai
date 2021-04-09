import matter from "gray-matter";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import PageTitle from "../components/layout/pageTitle";
import StyledMarkdown from "../components/markdown/styledMarkdown";
import PageHeading from "../components/shared/page_heading";

export default function Team({ team_members }) {
  return (
    <>
      <PageTitle title="Meet the Team" />
      {team_members && team_members.length > 0 ? (
        <>
          <PageHeading heading="Meet the Team" />

          <div className="grid page-padding py-12 grid-cols-1 gap-8 first:grid-cols-2 second:grid-cols-3">
            {team_members.map((member) => (
              <div className="body-text-left body-text-lato" key={member.name}>
                <h4 className="font-bold text-2xl first:text-3xl">{member.name}</h4>
                <p className="body-text pt-0 italic">{member.role}</p>
                <StyledMarkdown children={member.bio} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center text-center items-center page-padding py-12">
          <h1 className="text-3xl font-bold">Team member data is currently unavailable</h1>
          <p className="text-lg italic pt-4">Please come back later</p>
          <Link href="/">
            <a className="mt-6 py-3 px-5 border border-gray-300 rounded hover:bg-gray-600 hover:border-gray-600 hover:text-white hover:shadow-md focus:bg-gray-600 focus:border-gray-600 focus:text-white focus:shadow-md transition">
              Go Home <HiOutlineArrowNarrowRight className="inline-block" />
            </a>
          </Link>
        </div>
      )}
    </>
  );
}

export async function getStaticProps() {
  let teamFile = await import("../page_data/team.md");
  let teamData = matter(teamFile.default);

  return {
    props: {
      team_members: teamData?.data?.team_member,
    },
  };
}
