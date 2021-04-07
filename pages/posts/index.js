import { getPostCount } from "../../utils/posts";
import { default as Posts, getStaticProps as postPageGetStaticProps } from "./[page].js";

export default function PostsIndex({ postsAvailable, pageProps }) {
  return postsAvailable ? <Posts {...pageProps} /> : <p>Help</p>;
}

export async function getStaticProps() {
  const numPosts = await getPostCount();
  const postsAvailable = numPosts > 0;
  const { props: pageProps } = postsAvailable && (await postPageGetStaticProps({ params: { page: "1" } }));

  return {
    props: {
      postsAvailable,
      pageProps,
    },
  };
}
