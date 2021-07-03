import Image from "next/image";
import Link from "next/link";

import { getPostsAndPortfolio } from "../lib/data";

import Container from "@/components/Container";
import Skills from "@/components/Skills";

export const getStaticProps = async () => {
  const data = await getPostsAndPortfolio();
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          ¡Hola 👋! <br /> Soy Andres Reyes
        </h1>
        <div className="flex flex-col items-center py-4 mt-8 bg-gray-800 border-l-8 border-green-300 md:flex-row rounded-xl">
          <h2 className="pl-4 text-lg text-gray-400 dark:text-gray-400 md:pr-4 mb-11 md:mb-0 font-mono">
            Soy Frontend Developer especializado en el ecosistema de JavaScript. Amante de las
            buenas prácticas y del software de calidad. Soy Frontend Developer especializado en el
            ecosistema de JavaScript. Amante de las buenas prácticas y del software de calidad.
          </h2>
          <Image
            alt="Andres Reyes"
            height={900}
            width={900}
            src="/static/images/profile-new.jpg"
            className="object-cover rounded-full"
          />
        </div>
        <Skills />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="mt-20 ">
            <div className="text-4xl text-gray-900 font-semibold mb-4">Recent Posts</div>
            {data?.posts?.map((post) => (
              <div key={post.slug} className="grid grid-cols-1 md:grid-cols-4 py-6">
                <div className="mb-2 md:mb-0 md:col-span-1">
                  <p className="text-gray-600 text-sm">{new Date(post.date).toDateString()}</p>
                </div>
                <div className="md:col-span-3">
                  <Link href={`/blog/${post.slug}`}>
                    <a className="text-2xl font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-300">
                      {post.title}
                    </a>
                  </Link>
                  <p className="text-gray-700 leading-relaxed">{post.description}</p>
                  <div className="text-sm text-gray-900 font-semibold mt-1">{post.author.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
