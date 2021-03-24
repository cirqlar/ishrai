import PageTitle from "../components/layout/pageTitle";
import PageHeading from "../components/shared/page_heading";

export default function Partners() {
  return (
    <>
      <PageTitle title="Our Partners" />
      <PageHeading heading="Our Partners" />
      <div className="page-padding py-12 text-center flex flex-col items-center">
        <div className="pt-6 flex flex-wrap justify-center items-start">
          <a href="https://www.heartlandalliance.org/heartland-alliance-international/" target="_blank">
            <img className=" max-h-40 pb-6 pr-6" src="/partners/heartland_alliance.png" alt="Heartland Alliance" />
          </a>
          <a href="https://www.isdao.org/home/" target="_blank">
            <img className=" max-h-40 pb-6 pr-6" src="/partners/ISDAO.png" alt="ISDAO" />
          </a>
          <a href="https://frontlineaids.org/" target="_blank">
            <img className=" max-h-40 pb-6 pr-6" src="/partners/FrontlineAIDS.png" alt="Frontline AIDS" />
          </a>
          <a href="https://viivhealthcare.com/en-gb/" target="_blank">
            <img className=" max-h-40 pb-6 pr-6" src="/partners/viiv.png" alt="VIIV" />
          </a>
          <a href="https://apin.org.ng/" target="_blank">
            <img className=" max-h-40 pb-6 pr-6" src="/partners/apin.png" alt="VIIV" />
          </a>
        </div>
      </div>
    </>
  );
}
