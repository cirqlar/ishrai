import Link from 'next/link'

import PageHeading from "../../components/shared/page_heading";
import LinkPagination from "../../components/shared/pagination";
import { getNumPages, getPage, getPostCount } from "../../utils/posts";

export default function Posts({ currentPage, pageCount, posts }) {
  return (
    <>
      <PageHeading heading="News/Blog" />
      <div className="page-padding py-12 text-center flex flex-col items-center">
        <h3 className="font-bold italic text-3xl first:text-4xl">Posts</h3>
        {posts.map((val) => (
          <div key={val.path}>
            <Link href={`/post/${val.path}`}><a>{ val.title }</a></Link>
            <p>{val.excerpt} post</p>
          </div>
        ))}
        <LinkPagination currentPage={currentPage} numPages={pageCount} baseLink="/posts/" />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPage(params.page);

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
