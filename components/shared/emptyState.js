import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function EmptyState({ title, subtitle }) {
  return (
    <div className="flex flex-col justify-center text-center items-center page-padding py-12">
      <h1 className="text-3xl font-bold">{ title }</h1>
      <p className="text-lg italic pt-4">{ subtitle ?? "Please come back later" }</p>
      <Link href="/">
        <a className="mt-6 py-3 px-5 border border-gray-300 rounded hover:bg-gray-600 hover:border-gray-600 hover:text-white hover:shadow-md focus:bg-gray-600 focus:border-gray-600 focus:text-white focus:shadow-md transition">
          Go Home <HiOutlineArrowNarrowRight className="inline-block" />
        </a>
      </Link>
    </div>
  );
}
