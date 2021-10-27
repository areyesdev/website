import { MDXRemote } from "next-mdx-remote";

import { getFileBySlug, getFiles } from "@/lib/mdx";

export default function Post({ source }) {
  return <MDXRemote {...source} />;
}

export async function getStaticPaths() {
  const posts = await getFiles("posts");
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { source, frontMatter } = await getFileBySlug("posts", params.slug);

  return {
    props: {
      source,
      frontMatter,
    },
  };
}
