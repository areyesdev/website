/* eslint-disable jsx-a11y/accessible-emoji */
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import Skills from "@/components/Skills";

import { getPostsAndPortfolio } from "../lib/data";

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
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          ¡Hola 👋! <br /> Soy Andres Reyes
        </h1>
        <div className="flex flex-col items-center py-4 mt-8 bg-gray-800 border-l-8 border-green-300  md:flex-row rounded-xl">
          <h2 className="pl-4 text-lg text-gray-300 dark:text-gray-400 md:pr-4 mb-11 md:mb-0 font-mono">
            Soy Frontend Developer especializado en el ecosistema de JavaScript. Amante de las
            buenas prácticas y del software de calidad. Soy Frontend Developer especializado en el
            ecosistema de JavaScript. Amante de las buenas prácticas y del software de calidad.
          </h2>
          <Image
            alt="Andres Reyes"
            height={900}
            width={900}
            src="/static/images/profile_areyes.png"
            className="object-cover rounded-full"
          />
        </div>
        <Skills />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 mt-4 text-black dark:text-white">
          ✍️Timeline
        </h3>
        <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
          2021
        </h3>
        <ul>
          <li className="mb-4 ml-2">
            <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
              <span className="sr-only">Check</span>
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </g>
              </svg>
              <p className="font-mono text-lg text-gray-900 dark:text-gray-100">
                Inicio mi nuevo trabajo 👌
              </p>
            </div>
          </li>
          <li className="mb-4 ml-2">
            <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
              <span className="sr-only">Check</span>
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </g>
              </svg>
              <p className="font-mono text-lg text-gray-900 dark:text-gray-100">
                Inicio mi nuevo trabajo 👌
              </p>
            </div>
          </li>
          <li className="mb-4 ml-2">
            <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
              <span className="sr-only">Check</span>
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </g>
              </svg>
              <p className="font-mono text-lg text-gray-900 dark:text-gray-100">
                Inicio mi nuevo trabajo 👌
              </p>
            </div>
          </li>
          <li className="mb-4 ml-2">
            <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
              <span className="sr-only">Check</span>
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </g>
              </svg>
              <p className="font-mono text-lg text-gray-900 dark:text-gray-100">
                Inicio mi nuevo trabajo dfasd SDFASDFG SDFASD dfgdfs 🙌
              </p>
            </div>
          </li>
          <li className="mb-4 ml-2">
            <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
              <span className="sr-only">Check</span>
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </g>
              </svg>
              <p className="font-mono text-lg text-gray-900 dark:text-gray-100">
                Inicio mi nuevo trabajo, nicio mi nuevo trabajo 👌
              </p>
            </div>
          </li>
        </ul>
        {/* <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
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
        </div> */}
      </div>
    </Container>
  );
}
