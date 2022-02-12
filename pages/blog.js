/* eslint-disable react/jsx-key */
import NextLink from "next/link";

import Container from "@/components/Container";
import { Layout } from "@/components/Layout";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("posts");
  return {
    props: { posts },
  };
}
export default function Blog({ posts }) {
  return (
    <Container>
      <Layout>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-black   dark:text-white">
          Blog ✍️
        </h2>
        <p className="text-lg text-gray-600 dark:text-white mb-6 md:mb-8 ">
          Notas sobre lo que estoy construyecto y voy aprendiendo en el camino como desarrollador.
        </p>
        <div className="flex flex-col cursor-pointer ">
          {posts.map((post) => (
            <NextLink key={post.slug} href={post.slug}>
              <a className="w-full">
                <div className="w-full mb-8">
                  <div className="flex flex-col justify-between md:flex-row">
                    <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
                      {post.title}&rarr;
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{post.summary}</p>
                </div>
              </a>
            </NextLink>
          ))}
        </div>
      </Layout>
    </Container>
  );
}
