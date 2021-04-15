import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

import StyledMarkdown from "../markdown/styledMarkdown";

function TheImage({image, description}) {
  return (
    <div className={cn("relative")}>
      <Image
        src={image}
        alt={description}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        sizes="(max-width: 575px) 600px, (min-width: 576px) 1200px"
      />
    </div>
  );
}

export default function PictureByText({ text, image, description, image_right, use_link, link }) {
  return (
    <div className="grid grid-cols-1 first:grid-cols-2" style={{ minHeight: "20rem"}}>
      {!image_right && <TheImage image={image} description={description}  />}
      <div className="page-padding body-text-lato body-text-left pt-8 pb-12 bg-gray-200">
        <StyledMarkdown children={text} />
        {use_link && (
          <Link href={link.url}>
            <a className="link-button mt-5">{link.text}</a>
          </Link>
        )}
      </div>
      {image_right && <TheImage image={image} description={description}  />}
    </div>
  );
}
