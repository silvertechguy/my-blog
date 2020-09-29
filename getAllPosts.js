function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName),
  }));
}

export const posts = importAll(
  require.context("./pages/blog/", true, /\.mdx$/)
);

// It’s a function that imports all MDX files from the folder pages/blog,
// and for each post it returns an object with the path of the file,
// without the extension (/post-1), and the data of the blog post
