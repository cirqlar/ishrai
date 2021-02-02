import Image from "next/image";

export default function PageHeading({ heading }) {
  return (
    <div className="h-20 relative">
      <Image
        src="/bgs/bg-1.png"
        alt="Hands raised"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        sizes="(max-width: 575px) 600px, (min-width: 576px) 1200px"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 page-padding text-white flex justify-center items-center text-center">
        <h2 className="text-4xl font-bold first:text-5xl">{heading}</h2>
      </div>
    </div>
  );
}
