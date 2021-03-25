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
    const meta = matter(content.default + "\n", { excerpt: true, excerpt_separator: "\n" });

    posts.push({
      ...meta.data,
      excerpt: meta.excerpt,
      path: post.replace(".md", ""),
    });
  }

  unorderedPosts = posts;

  return posts;
}

export async function getPostCount() {
  if (!unorderedPosts) {
    await getInitialPosts();
  }
  if (!postCount) {
    postCount = unorderedPosts.length;
  }

  return postCount;
}

export async function getNumPages() {
  if (!postCount) {
    await getPostCount();
  }
  if (!numPages) {
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
      .map((val) => ({ ...val, created: val.created.toJSON(), last_modified: val.last_modified.toJSON() }));
  }

  return orderedPosts;
}

export async function getPage(page_number) {
  if (!orderedPosts) {
    await getSortedPosts();
  }
  if (!numPages) {
    await getNumPages();
  }

  if (page_number <= 0 || page_number > numPages) {
    throw Error("Invalid Page Number");
  }

  const startIndex = (page_number - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  return orderedPosts.slice(startIndex, endIndex);
}
