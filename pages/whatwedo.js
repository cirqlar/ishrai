
import { BiPlusMedical, BiFemale } from "react-icons/bi";
import { FaTransgender, FaBalanceScale } from "react-icons/fa";

import ExIcon from "../components/icon_containers/extended_icons";
import PageHeading from "../components/shared/page_heading";

export default function Contact() {
  const socialIconProperties = {
    size: "30px",
  };

  return (
    <>
      <PageHeading heading="The Work we Do" />
      <div className="page-padding py-12 text-center flex flex-col items-center bg-gray-200">
        {/* <h3 className="font-bold italic text-3xl first:text-4xl">The Work We Do</h3> */}
        <p className="text-sm pt-4">ISHRAI offers several services and interventions which borders on the following:</p>
        <div className="pt-6 max-w-3xl">
          <ExIcon className="pb-8" icon={<BiPlusMedical size="48px" />} title="Health" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat sunt nostrud amet." />
          <ExIcon
            className="pb-8"
            icon={
              <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 10.8889L21 0L42 10.8889V23.4397H39V15.1556L21 25.1553L0 13.4889V10.8889ZM33 15.057L36 13.3904L38.0793 12.2352L21 3.37931L3.92072 12.2352L6 13.3904L9 15.057L21 21.724L33 15.057ZM21 34.4689L31.5 28.5626V22.3224L34.5 20.6558V30.3171L21 37.9108L7.5 30.3171V20.6558L10.5 22.3224V28.5626L21 34.4689Z"
                  fill="white"
                />
              </svg>
            }
            title="Education"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat sunt nostrud amet."
            alignRight
          />
          <ExIcon className="pb-8" icon={<FaTransgender size="42px" />} title="Gender Based Violence" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat sunt nostrud amet." />
          <ExIcon className="pb-8" icon={<FaBalanceScale size="45px" />} title="Human Rights" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat sunt nostrud amet." alignRight />
          <ExIcon className="pb-8" icon={<BiFemale size="45px" />} title="Women's Rights" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat sunt nostrud amet." />
        </div>
      </div>
    </>
  )
}