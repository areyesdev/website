import { MDXRemote } from "next-mdx-remote";

import Container from "@/components/Container";
import { Layout } from "@/components/Layout";
import { MDXComponents } from "@/components/MDXComponents";
import { getFileBySlug, getFiles } from "@/lib/mdx";

export default function Post({ source, frontmatter }) {
  return (
    <Container>
      <Layout metadata={frontmatter}>
        <MDXRemote {...source} components={MDXComponents} />
      </Layout>
    </Container>
  );
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
  const { source, frontmatter } = await getFileBySlug("posts", params.slug);

  return {
    props: {
      source,
      frontmatter: {
        slug: params.slug,
        ...frontmatter,
      },
    },
  };
}
