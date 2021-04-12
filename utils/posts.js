import matter from "gray-matter";
import RemoveMarkdown from "remove-markdown";

// config
const postsPerPage = 10;

// variables
let unorderedPosts = null;
let orderedPosts = null;
let postCount = null;
let numPages = null;

function getExcerpt(originalString, length = 280) {
  let trimmedString = originalString;

  if (originalString.length > length) {
    //trim the string to the maximum length
    trimmedString = originalString.substr(0, length);

    let lastSpace = trimmedString.lastIndexOf(" ");
    if (lastSpace < 1) lastSpace = trimmedString.length;

    //re-trim if we are in the middle of a word and
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, lastSpace));
  }

  return trimmedString;
}

export async function getInitialPosts() {
  const context = require.context("../posts", true, /\.md$/);

  const posts = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../posts/${post}`);
    const meta = matter(content.default);

    posts.push({
      ...meta.data,
      content: meta.content,
      excerpt: RemoveMarkdown(getExcerpt(meta.content)),
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
      .sort((a, b) => b.created - a.created)
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

export async function getPostData(slug) {
  if (!orderedPosts) {
    await getSortedPosts();
  }

  let postIndex = orderedPosts.findIndex((post) => post.path === slug);

  return {
    previous: postIndex > 0 && orderedPosts[postIndex - 1],
    post: orderedPosts[postIndex],
    next: postIndex < orderedPosts.length - 1 && orderedPosts[postIndex + 1],
  };
}
