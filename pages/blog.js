/* eslint-disable react/jsx-key */
import Link from "next/link";

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
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Blog
        </h1>
        <div className="flex flex-col">
          {posts.map((post) => (
            <Link key={post.slug} href={post.slug}>
              <div className="flex flex-col">
                <h2>{post.title} &rarr;</h2>
                <p>{post.author}</p>
                <p>
                  {post.date}
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full p-1 bg-green-300 m-2">
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Layout>
    </Container>
  );
}
