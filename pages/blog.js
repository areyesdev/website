/* eslint-disable react/jsx-key */
import NextLink from "next/link";
import { BsCalendar4Week } from "react-icons/bs";

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
              <div className="border-b-2 border-blue-500 p-4">
                <h2 className="font-semibold text-xl">{post.title} &rarr;</h2>
                <div>
                  <BsCalendar4Week size={24} />
                  {post.date}
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className=" rounded-md text-sm text-center text-gray-600 bg-blue-300 my-2 p-1 ml-1 ">
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
