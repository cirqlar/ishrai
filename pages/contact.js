import matter from "gray-matter";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaMapPin, FaPhone, FaTwitterSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import PageTitle from "../components/layout/pageTitle";
import PageHeading from "../components/shared/page_heading";

export default function Contact({ general, social }) {
  const socialIconProperties = {
    size: "30px",
  };

  return (
    <>
      <PageTitle title="Contact Us" />
      <PageHeading heading="Contact Us" />
      <p className="font-bold italic text-lg text-center page-padding pt-4">
        If you want PREP, PEP, ARV, Testing or more information, reach out to us.
      </p>
      <div className="page-padding pt-8 first:flex first:justify-between mb-12">
        {/* <div className="flex flex-col flex-shrink first:mr-8 text-sm mb-8 first:mb-0"> */}
        <div className="flex flex-col text-sm mb-8 mx-auto">
          {general &&
            general.map((info) => (
              <span key={info.data + info.type} className="mt-2">
                {info.type == "email" ? (
                  <>
                    <HiMail {...socialIconProperties} className="mr-2 inline-block" />{" "}
                    <a href={`mailto:${info.data}`}>{info.data}</a>
                  </>
                ) : info.type == "phone" ? (
                  <>
                    <FaPhone {...socialIconProperties} className="mr-2 inline-block" /> <span>{info.data}</span>
                  </>
                ) : info.type == "address" ? (
                  <>
                    <FaMapPin {...socialIconProperties} className="mr-2 inline-block" /> <span>{info.data}</span>
                  </>
                ) : (
                  ""
                )}
              </span>
            ))}
          <h3 className="font-bold italic text-xl mt-4">Social Media</h3>
          {social &&
            social.map((info) => {
              switch (info.type) {
                case "facebook":
                  return (
                    <a
                      key={info.type + info.handle}
                      href={`https://www.facebook.com/${info.handle}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4"
                    >
                      <FaFacebookSquare {...socialIconProperties} className="mr-2 inline-block" />{" "}
                      <span>{info.display}</span>
                    </a>
                  );
                case "instagram":
                  return (
                    <a
                      key={info.type + info.handle}
                      href={`https://www.instagram.com/${info.handle}/`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2"
                    >
                      <FaInstagramSquare {...socialIconProperties} className="mr-2 inline-block" />{" "}
                      <span>@{info.handle}</span>
                    </a>
                  );
                case "linkedin":
                  return (
                    <a
                      key={info.type + info.handle}
                      href={`https://www.linkedin.com/company/${info.handle}/`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2"
                    >
                      <FaLinkedin {...socialIconProperties} className="mr-2 inline-block" />
                      <span>{info.handle}</span>
                    </a>
                  );
                case "twitter":
                  return (
                    <a
                      key={info.type + info.handle}
                      href={`https://twitter.com/${info.handle}/`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2"
                    >
                      <FaTwitterSquare {...socialIconProperties} className="mr-2 inline-block" />
                      <span>@{info.handle}</span>
                    </a>
                  );
                default:
                  return "";
              }
            })}
        </div>
        {false && (
          <div className="mapouter max-w-2xl rounded border border-gray-200 flex-shrink-0 flex-grow">
            <div className="gmap_canvas">
              <iframe
                height="300px"
                width="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=5%20Abiola%20Fagbola&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
              <a href="https://yt2.org"></a>
              <br />
              <style>{".mapouter{position:relative;text-align:right;height:320px;padding:10px;}"}</style>
              <style>{".gmap_canvas {overflow:hidden;background:none!important;height:300px;width:100%;}"}</style>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  let contactFile = await import("../page_data/contact.md");
  let contactData = matter(contactFile.default);

  return {
    props: {
      general: contactData?.data?.general,
      social: contactData?.data?.social,
    },
  };
}
