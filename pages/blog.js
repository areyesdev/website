/* eslint-disable react/jsx-key */
import NextLink from "next/link";
import { BsCalendarWeek } from "react-icons/bs";

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
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-black  md:text-5xl dark:text-white">
          Blog ✍️
        </h1>
        <p className="text-xl text-gray-600 dark:text-white mb-6 md:mb-8 ">
          Notas sobre lo que estoy construyecto y voy aprendiendo en el camino como desarrollador.
        </p>
        <div className="flex flex-col cursor-pointer ">
          {posts.map((post) => (
            <NextLink key={post.slug} href={post.slug}>
              <div>
                <h2 className="font-semibold text-xl">{post.title} &rarr;</h2>
                <div className="flex items-center">
                  <BsCalendarWeek size={14} className="text-gray-400" />
                  <span className="p-1 text-xs text-gray-400">{post.date}</span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className=" rounded-md  font-semibold text-gray-600 bg-blue-300 text-xs p-1 m-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </NextLink>
          ))}
        </div>
      </Layout>
    </Container>
  );
}
