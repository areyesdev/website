import { MDXRemote } from "next-mdx-remote";

import Container from "@/components/Container";
import { Layout } from "@/components/Layout";
import { getFileBySlug, getFiles } from "@/lib/mdx";

export default function Page({ source, frontmatter }) {
  return (
    <Container>
      <Layout metadata={frontmatter}>
        <MDXRemote {...source} />
      </Layout>
    </Container>
  );
}

export async function getStaticPaths() {
  const pages = await getFiles("pages");
  const paths = pages.map((page) => ({
    params: {
      slug: page.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug("pages", params.slug);

  return {
    props: {
      source,
      frontmatter,
    },
  };
}
