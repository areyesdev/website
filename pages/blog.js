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
        <h1 className="mb-6 text-2xl font-bold tracking-tight text-black  md:text-5xl dark:text-white">
          Blog ✍️
        </h1>
        <div className="flex flex-col cursor-pointer ">
          {posts.map((post) => (
            <NextLink key={post.slug} href={post.slug}>
              <div className="border-b-2 border-blue-300 p-4">
                <h2 className="font-bold text-lg">{post.title} &rarr;</h2>
                <p>{post.author}</p>
                <p>
                  {post.date}
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className=" rounded-md text-sm text-center text-gray-600 bg-blue-300 my-2 p-1 ml-1 ">
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </NextLink>
          ))}
        </div>
      </Layout>
    </Container>
  );
}
