import matter from "gray-matter";

// config
const postsPerPage = 1;

// variables
let unorderedPosts = null;
let orderedPosts = null;
let postCount = null;
let numPages = null;

export async function getInitialPosts() {
  const context = require.context("../posts", false, /\.md$/);

  const posts = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../posts/${post}`);
    const meta = matter(content.default, { excerpt: true });

    posts.push({
      ...meta.data,
      excerpt: meta.excerpt,
    });
  }

  unorderedPosts = posts;

  return posts;
}

export async function getPostCount() {
  if (!unorderedPosts) {
    await getInitialPosts();
  } else if (!postCount) {
    postCount = unorderedPosts.length;
  }

  return postCount;
}

export async function getNumPages() {
  if (!postCount) {
    await getPostCount();
  } else if (!numPages) {
    numPages = Math.ceil(postCount / postsPerPage);
  }

  return numPages;
}

export async function getSortedPosts() {
  if (!unorderedPosts) {
    await getInitialPosts();
  }
  if (!orderedPosts) {
    orderedPosts = [...unorderedPosts]
      .sort((a, b) => b.last_modified - a.last_modified)
      .map((val) => ({ ...val, created: val.created.toString(), last_modified: val.last_modified.toString() }));
  }

  return orderedPosts;
}
