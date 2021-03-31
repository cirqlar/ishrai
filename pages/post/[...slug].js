import Link from "next/link";
import StyledMarkdown from "../../components/markdown/styledMarkdown";
import { getPostData, getSortedPosts } from "../../utils/posts";

export default function Post({ post, previous, next }) {
  return (
    <>
      <div className="page-padding py-12 text-center flex flex-col items-center">
        <h1 className="font-bold text-4xl first:text-5xl">{post.title}</h1>
        <StyledMarkdown children={post.content} />

        {previous && (
          <Link href={`/post/${previous.path}`}>
            <a>{previous.title}</a>
          </Link>
        )}
        {next && (
          <Link href={`/post/${next.path}`}>
            <a>{next.title}</a>
          </Link>
        )}
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
