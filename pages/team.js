import matter from "gray-matter";

import PageTitle from "../components/layout/pageTitle";
import StyledMarkdown from "../components/markdown/styledMarkdown";
import PageHeading from "../components/shared/page_heading";

export default function Team({ team_members }) {
  return (
    <>
      <PageTitle title="Meet the Team" />
      <PageHeading heading="Meet the Team" />

      <div>
        {team_members.map((member) => (
          <div key={member.name}>
            <h4>{member.name}</h4>
            <p>{member.role}</p>
            <StyledMarkdown children={member.bio} />
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  let teamFile = await import("../page_data/team.md");
  let teamData = matter(teamFile.default);

  return {
    props: {
      team_members: teamData.data.team_member,
    },
  };
}
