import PageTitle from "../../components/layout/pageTitle";
import EmptyState from "../../components/shared/emptyState";
import PageHeading from "../../components/shared/page_heading";
import { getPostCount } from "../../utils/posts";
import { default as Posts, getStaticProps as postPageGetStaticProps } from "./[page].js";

export default function PostsIndex({ postsAvailable, pageProps }) {
  return postsAvailable ? (
    <Posts {...pageProps} />
  ) : (
    <>
      <PageTitle title="News and Blog" />
      <PageHeading heading="News/Blog" />
      <EmptyState title="There are no articles right now" />
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
