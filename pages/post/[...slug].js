import Link from "next/link";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import StyledMarkdown from "../../components/markdown/styledMarkdown";
import { getPostData, getSortedPosts } from "../../utils/posts";

export default function Post({ post, previous, next }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date_created = new Date(post.created);
  const day_of_month = date_created.getDate();
  const date_created_string = `${day_of_month}${
    day_of_month === 1 ? "st" : day_of_month === 2 ? "nd" : day_of_month === 3 ? "rd" : "th"
  } ${months[date_created.getMonth()]}, ${date_created.getFullYear()}`;

  return (
    <>
      <div className="page-padding py-12 text-center flex flex-col items-center">
        <h1 className="font-bold text-4xl first:text-5xl">{post.title}</h1>
        <p className="italic text-xl first:text-2xl text-gray-800 pt-4">Published {date_created_string}</p>
        <StyledMarkdown children={post.content} />

        <div className="flex flex-col w-full max-w-3xl mt-8">
          {previous && (
            <Link href={`/post/${previous.path}`}>
              <a className="font-bold italic text-3xl first:text-4xl flex items-center self-start">
                <BiLeftArrowAlt /> <span> {previous.title}</span>
              </a>
            </Link>
          )}
          {next && (
            <Link href={`/post/${next.path}`}>
              <a className="font-bold italic text-3xl first:text-4xl pt-2 flex items-center self-end">
                <span>{next.title}</span> <BiRightArrowAlt />
              </a>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  let postData = await getPostData(params.slug.join("/"));

  return {
    props: { ...postData },
  };
}

export async function getStaticPaths() {
  let posts = await getSortedPosts();
  let paths = posts.map((post) => ({
    params: { slug: post.path.split("/") },
  }));

  return { paths, fallback: false };
}
