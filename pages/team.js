import matter from "gray-matter";

import PageTitle from "../components/layout/pageTitle";
import StyledMarkdown from "../components/markdown/styledMarkdown";
import EmptyState from "../components/shared/emptyState";
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
        <EmptyState title="Team member data is currently unavailable" />
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
