import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

export default function Banner({ title, subtitle, background_image: image, image_description: desc, use_link, link }) {
  return (
    <div className="h-96 relative">
      <Image
        src={image}
        alt={desc}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        sizes="(max-width: 575px) 600px, (min-width: 576px) 1200px"
      />
      <div
        className={cn(
          "absolute inset-0 page-padding flex flex-col first:flex-row",
          "justify-center first:justify-between first:items-center bg-black bg-opacity-60 text-white"
        )}
      >
        <div className="flex flex-col first:w-96">
          <h2 className="text-4xl font-bold w-60 first:text-5xl first:w-96">{title}</h2>
          {subtitle && <p className="pt-4 text-sm italic w-60 first:text-lg first:w-96">{subtitle}</p>}
        </div>
        {use_link && (
          <div className="flex-grow flex justify-center items-center">
            <Link href={link.url}>
              <a className="link-button-big">{link.text}</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
