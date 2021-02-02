import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiLocationMarker, HiMail } from "react-icons/hi";

import PageHeading from "../components/shared/page_heading";

export default function Contact() {
  const socialIconProperties = {
    size: "30px",
  };

  return (
    <>
      <PageHeading heading="Contact Us" />
      <p className="font-bold italic text-lg text-center page-padding pt-4">
        If you want PREP, PEP, ARV, Testing or more information, reach out to us.
      </p>
      <div className="page-padding pt-8 first:flex first:justify-between mb-12">
        <div className="flex flex-col flex-shrink first:mr-8 text-sm mb-8 first:mb-0">
          <span>
            <HiLocationMarker {...socialIconProperties} className="mr-2 inline-block" /> <span>5 Abiola Fagbola Close, Lagos, Nigeria</span>
          </span>
          <span className="mt-2">
            <HiMail {...socialIconProperties} className="mr-2 inline-block" /> <a href="mailto:ishraing@gmail.com">ishraing@gmail.com</a>
          </span>
          <span className="mt-2">
            <FaPhone {...socialIconProperties} className="mr-2 inline-block" /> <span>+2348156843504</span>
          </span>
          <h3 className="font-bold italic text-xl mt-4">Social Media</h3>
          <a href="https://www.facebook.com/ishrai.nigeria.7" target="_blank" className="mt-4">
            <FaFacebookSquare {...socialIconProperties} className="mr-2 inline-block" /> <span>Ishrai Nigeria</span>
          </a>
          <a href="https://www.instagram.com/ishrai_n/" target="_blank" className="mt-2">
            <FaInstagramSquare {...socialIconProperties} className="mr-2 inline-block" /> <span>@ishrai_n</span>
          </a>
          <a href="https://www.linkedin.com/company/ishraehq" target="_blank" className="mt-2">
            <FaLinkedin {...socialIconProperties} className="mr-2 inline-block" /> <span>ISHRAI</span>
          </a>
        </div>
        <div className="mapouter max-w-lg rounded border border-gray-200 flex-shrink-0 flex-grow">
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
      </div>
    </>
  );
}
