import Link from "next/link";

import PageHeading from "../../components/shared/page_heading";
import LinkPagination from "../../components/shared/pagination";
import { getNumPages, getPage, getPostCount } from "../../utils/posts";

export default function Posts({ currentPage, pageCount, posts }) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <>
      <PageHeading heading="News/Blog" />
      <div className="page-padding py-12 text-center flex flex-col items-center">
        <div className="w-full max-w-4xl flex">
          <div>
            {posts.map((val) => {
              const date_created = new Date(val.created);
              const day_of_month = date_created.getDate();
              const date_created_string = `${day_of_month}${
                day_of_month === 1 ? "st" : day_of_month === 2 ? "nd" : day_of_month === 3 ? "rd" : "th"
              } ${months[date_created.getMonth()]}, ${date_created.getFullYear()}`;

              return (
                <div key={val.path} className="text-left body-text-left body-text-lato mb-8">
                  <h3 className="font-bold italic text-3xl first:text-4xl">
                    <Link href={`/post/${val.path}`}>
                      <a className="underline">{val.title}</a>
                    </Link>
                    <span className="text-xs font-normal ml-4">{date_created_string}</span>
                  </h3>
                  <p className="body-text">{val.excerpt}...</p>
                </div>
              );
            })}
          </div>
          <div className="ml-8 hidden second:block">
            <div>
              <img className="w-full" src="/logo/ishrai-transparent.png" alt="ISHRAI's logo" />
            </div>
          </div>
        </div>
        <LinkPagination currentPage={currentPage} numPages={pageCount} baseLink="/posts/" className="mt-8" />
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
