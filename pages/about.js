import PageHeading from "../components/shared/page_heading";

export default function About() {
  const socialIconProperties = {
    size: "30px",
  };

  return (
    <>
      <PageHeading heading="Who We Are" />
      <div className="page-padding py-12 text-center flex flex-col items-center">
        <h3 className="font-bold italic text-3xl first:text-4xl">About Us</h3>

        <p className="body-text pt-5 max-w-3xl">
          Improved Sexual Health and Rights Advocacy Initiative (ISHRAI) was founded in, 2014 and formally registered
          with Corporate Affairs Commission on the 13th day of January, 2017 with registration number: CAC/IT/NO.93952.
          ISHRAI was registered to promote the health and rights of marginalized groups in Nigeria through advocacy,
          active participation, service delivery and innovative engagement processes. Among other things, to advocate
          for an enabling environment at the community, state and national levels that ensures the functionality of all
          persons irrespective of age, linguistic or religious affiliation, colour, national or ethnic origin,
          functional disability, sexual orientation, gender identity/expression, marital status or any other
          circumstance affecting the private person.
        </p>
        <p className="body-text pt-5 max-w-3xl">
          We are a non-profit, non-governmental, community based organization here in Lagos State, Nigeria. Among other
          things, to advocate for an enabling environment at the community, state and national levels that ensures the
          functionality of all persons irrespective of age, linguistic or religious affiliation, colour, national or
          ethnic origin, functional disability, sexual orientation, gender identity/expression, marital status or any
          other circumstance affecting the private person.
        </p>
        <p className="body-text pt-5 max-w-3xl">
          Lesbian Gay and Bisexual Persons are forced to deal with the effects of discriminatory legislation which
          criminalizes their behavior. These laws and resulting fear of discrimination, violence, and arrests further
          prevent them from accessing health services.
        </p>
        <p className="body-text pt-5 max-w-3xl">
          Not only are Lesbian Gay and Bisexual Person suffering from HIV and Human Rights abuse at a much higher
          prevalence rate, but they are simultaneously difficult to reach with appropriate interventions. This is
          because key populations are often mobile, stigmatized, unable to self-identify, marginalized, and at a higher
          risk of physical abuse. Due to these factors, it is difficult for most organizations to reach key populations
          with accurate, non-judgmental educational materials that are rights-based and gender sensitive. Specialized
          and carefully adapted intervention techniques are required. Additionally, the lack of KP-friendly and
          competent care in public and private health facilities and other service delivery points further increases the
          vulnerability of key populations by discouraging them from accessing services.
        </p>
        <p className="body-text pt-5 max-w-3xl">
          As a strategy to reach key population, ISHRAI an LGB-led/focused organization have been implementing
          intervention programs to improve the livelihood of target populations. Key activities include:
        </p>
        <ul className="body-list pt-5 max-w-3xl">
          <li>Capacity building in the area of sexual and human rights for key populations.</li>
          <li>Centre-based counselling, IEC (Information, Education, Communication) or peer education sessions.</li>
          <li>Law reforms and policy dialogues at the community, state and national levels.</li>
          <li>Periodic outreach activities to communities.</li>
          <li>Consultancy services on sexuality, gender and human rights issues.</li>
        </ul>
      </div>
    </>
  );
}
