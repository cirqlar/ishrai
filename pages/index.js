import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { BiPlusMedical, BiFemale } from "react-icons/bi";
import { FaTransgender, FaBalanceScale } from "react-icons/fa";

import HomeIcon from "../components/icon_containers/home_icons";

export default function Home({ data, partners, what_we_do }) {
  const { banner_title, banner_subtitle, about_us, banner_image, banner_image_alt } = data;

  return (
    <>
      <div className="h-96 relative">
        <Image
          src={banner_image}
          alt={banner_image_alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(max-width: 575px) 600px, (min-width: 576px) 1200px"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 page-padding text-white flex flex-col justify-center">
          <h2 className="text-4xl font-bold w-60 first:text-5xl first:w-96">{banner_title}</h2>
          <p className="pt-4 text-sm italic w-60 first:text-lg first:w-96">{banner_subtitle}</p>
        </div>
      </div>
      <div className="page-padding py-12 text-center flex flex-col items-center">
        <h3 className="font-bold italic text-3xl first:text-4xl">A little About Us</h3>
        <p className="body-text pt-5 max-w-3xl">{about_us}</p>
        <Link href="/about">
          <a className="link-button mt-5">Learn More</a>
        </Link>
      </div>
      {what_we_do && what_we_do.length > 0 ? (
        <div className="page-padding py-12 text-center flex flex-col items-center bg-gray-200">
          <h3 className="font-bold italic text-3xl first:text-4xl">The Work We Do</h3>
          <p className="text-sm pt-4">
            ISHRAI offers several services and interventions which borders on the following:
          </p>
          <div className="pt-6 flex flex-wrap justify-center items-start">
            {what_we_do.slice(0, 5).map((item) => (
              <HomeIcon
                key={item.title}
                className="mx-8 pb-4"
                icon={<img src={item.icon} alt={item.title} style={{maxWidth: "48px", maxHeight: "48px"}} />}
                title={item.title}
              />
            ))}
          </div>
          <Link href="/whatwedo">
            <a className="link-button mt-5">Learn More</a>
          </Link>
        </div>
      ) : (
        ""
      )}
      {partners && partners.length > 0 ? (
        <div className="page-padding py-12 text-center flex flex-col items-center">
          <h3 className="font-bold italic text-3xl first:text-4xl">Our Partners</h3>
          <div className="pt-10 flex flex-wrap justify-center items-start">
            {partners.slice(0, 4).map((partner) => (
              <a key={partner.name} href={partner.url} target="_blank">
                <img className=" max-h-32 pb-4 pr-4" src={partner.image} alt={partner.name} />
              </a>
            ))}
          </div>
          <Link href="/partners">
            <a className="link-button mt-10">See More</a>
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export async function getStaticProps() {
  let indexFile = await import("../page_data/index.md");
  let indexData = matter(indexFile.default);

  let partnersFile = await import("../page_data/partners.md");
  let partnersData = matter(partnersFile.default);

  let whatwedoFile = await import("../page_data/whatwedo.md");
  let whatwedoData = matter(whatwedoFile.default);

  return {
    props: {
      data: indexData.data,
      partners: partnersData?.data?.partners,
      what_we_do: whatwedoData?.data?.item,
    },
  };
}
