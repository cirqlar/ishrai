import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import PageHeading from "../../components/shared/page_heading";
import { getPostCount } from "../../utils/posts";
import { default as Posts, getStaticProps as postPageGetStaticProps } from "./[page].js";

export default function PostsIndex({ postsAvailable, pageProps }) {
  return postsAvailable ? (
    <Posts {...pageProps} />
  ) : (
    <>
      <PageHeading heading="News/Blog" />
      <div className="flex flex-col justify-center text-center items-center page-padding py-12">
        <h1 className="text-3xl font-bold">There are no articles right now</h1>
        <p className="text-lg italic pt-4">Please come back later</p>
        <Link href="/">
          <a className="mt-6 py-3 px-5 border border-gray-300 rounded hover:bg-gray-600 hover:border-gray-600 hover:text-white hover:shadow-md focus:bg-gray-600 focus:border-gray-600 focus:text-white focus:shadow-md transition">
            Go Home <HiOutlineArrowNarrowRight className="inline-block" />
          </a>
        </Link>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const numPosts = await getPostCount();
  const postsAvailable = numPosts > 0;
  const { props: pageProps } = postsAvailable && (await postPageGetStaticProps({ params: { page: "1" } }));

  return {
    props: {
      postsAvailable,
      pageProps: pageProps ?? {},
    },
  };
}
