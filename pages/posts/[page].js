import PageHeading from "../../components/shared/page_heading";
import LinkPagination from "../../components/shared/pagination";
import { getNumPages, getPage, getPostCount, } from "../../utils/posts";

export default function Posts({ currentPage, pageCount, posts }) {
  return (
    <>
      <PageHeading heading="News/Blog" />
      <h3 className="font-bold italic text-3xl first:text-4xl">Posts</h3>
      {posts.map(val => <p key={val.path}>{val.excerpt} post</p>)}
      <LinkPagination currentPage={currentPage} numPages={pageCount} baseLink="/posts/" />
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPage(params.page);

  console.log(posts);

  return {
    props: {
      posts,
      postCount: await getPostCount(),
      pageCount: await getNumPages(),
      currentPage: parseInt(params.page),
    },
  };
}

export async function getStaticPaths() {
  const paths = Array.from({ length: await getNumPages() }).map((_, index) => ({
    params: { page: (index + 1).toString() },
  }));

  return { paths, fallback: false };
}
