import PageHeading from "../../components/shared/page_heading";
import { getNumPages, getPostCount } from "../../utils/posts";

export default function Posts() {
  return (
    <>
      <PageHeading heading="News/Blog" />
      <h3 className="font-bold italic text-3xl first:text-4xl">Posts</h3>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  const paths = Array.from({ length: await getNumPages() }).map((_, index) => ({
    params: { page: (index + 1).toString() },
  }));

  return { paths, fallback: false };
}
