import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

const root = process.cwd();

export const getFiles = async (type) => fs.readdirSync(path.join(root, "data", type));

export const getFileBySlug = async (type, slug) => {
  const mdxSource = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8");

  const { data, content } = await matter(mdxSource);

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require("remark-code-titles")],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    source,
    frontMatter: {
      slug: slug || null,
      ...data,
    },
  };
};

export const getAllFilesFrontMatter = async (type) => {
  const files = fs.readdirSync(path.join(root, "data", type));

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(path.join(root, "data", type, postSlug), "utf8");
    const { data } = matter(mdxSource);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
};
