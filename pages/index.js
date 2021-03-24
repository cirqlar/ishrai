import Image from "next/image";
import Link from "next/link";
import { BiPlusMedical, BiFemale } from "react-icons/bi";
import { FaTransgender, FaBalanceScale } from "react-icons/fa";

import HomeIcon from "../components/icon_containers/home_icons";

export default function Home() {
  return (
    <>
      <div className="h-96 relative">
        <Image
          src="/bgs/bg-2.png"
          alt="Hands raised"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(max-width: 575px) 600px, (min-width: 576px) 1200px"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 page-padding text-white flex flex-col justify-center">
          <h2 className="text-4xl font-bold w-60 first:text-5xl first:w-96">
            Promoting the wellbeing of all Nigerians
          </h2>
          <p className="pt-4 text-sm italic w-60 first:text-lg first:w-96">
            Regardless of gender identity, orientation, religious affiliation, race or ethnicity.
          </p>
        </div>
      </div>
      <div className="page-padding py-12 text-center flex flex-col items-center">
        <h3 className="font-bold italic text-3xl first:text-4xl">A little About Us</h3>
        <p className="body-text pt-5 max-w-3xl">
          Improved Sexual Health and Rights Advocacy Initiative (ISHRAI) is a non governmental non profit based
          organisation which aims to create a society void of discrimination of all persons based on actual or perceived
          gender identity, orientation, religious affiliation, race or ethnicity. This we through economic empowerment,
          education, community dialogue, safe-shelter, responding to and preventing cases of gender based violence.
        </p>
        <Link href="/about">
          <a className="link-button mt-5">Learn More</a>
        </Link>
      </div>
      <div className="page-padding py-12 text-center flex flex-col items-center bg-gray-200">
        <h3 className="font-bold italic text-3xl first:text-4xl">The Work We Do</h3>
        <p className="text-sm pt-4">ISHRAI offers several services and interventions which borders on the following:</p>
        <div className="pt-6 flex flex-wrap justify-center items-start">
          <HomeIcon className="mx-8 pb-4" icon={<BiPlusMedical size="48px" />} title="Health" />
          <HomeIcon
            className="mx-8 pb-4"
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
          />
          <HomeIcon className="mx-8 pb-4" icon={<FaTransgender size="42px" />} title="Gender Based Violence" />
          <HomeIcon className="mx-8 pb-4" icon={<FaBalanceScale size="45px" />} title="Human Rights" />
          <HomeIcon className="mx-8 pb-4" icon={<BiFemale size="45px" />} title="Women's Rights" />
        </div>
      </div>
      <div className="page-padding py-12 text-center flex flex-col items-center">
        <h3 className="font-bold italic text-3xl first:text-4xl">Our Partners</h3>
        <div className="pt-6 flex flex-wrap justify-center items-start">
          <a href="https://www.heartlandalliance.org/heartland-alliance-international/" target="_blank">
            <img className=" max-h-32 pb-4 pr-4" src="/partners/heartland_alliance.png" alt="Heartland Alliance" />
          </a>
          <a href="https://www.isdao.org/home/" target="_blank">
            <img className=" max-h-32 pb-4 pr-4" src="/partners/ISDAO.png" alt="ISDAO" />
          </a>
          <a href="https://frontlineaids.org/" target="_blank">
            <img className=" max-h-32 pb-4 pr-4" src="/partners/FrontlineAIDS.png" alt="Frontline AIDS" />
          </a>
          <a href="https://viivhealthcare.com/en-gb/" target="_blank">
            <img className=" max-h-32 pb-4 pr-4" src="/partners/viiv.png" alt="VIIV" />
          </a>
          <a href="https://apin.org.ng/" target="_blank">
            <img className=" max-h-32 pb-4 pr-4" src="/partners/apin.png" alt="VIIV" />
          </a>
        </div>
      </div>
    </>
  );
}
