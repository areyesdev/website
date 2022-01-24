/* eslint-disable jsx-a11y/accessible-emoji */
import Image from "next/image";

import Container from "@/components/Container";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Andres Reyes
            </h1>
            <span className="text-gray-700 underline decoration-2 decoration-blue-300 dark:text-gray-200 mb-4">
              FrontEnd Developer
            </span>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Especializado en el ecosistema de JavaScript me encanta el estudio y aprender cosas
              nuevas y mantener buenas practicas. <br />
              Egresado del Sena y estudiantante de Platzi 💚
            </p>
          </div>
          <div className="w-[80px] sm:w-[300px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Andres Reyes"
              height={200}
              width={200}
              src="/static/images/areyes_2.png"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <Skills />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 mt-4 text-black dark:text-white">
          🕵️Timeline
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
              <p className=" text-lg text-gray-900 dark:text-gray-100">
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
              <p className=" text-lg text-gray-900 dark:text-gray-100">
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
              <p className=" text-lg text-gray-900 dark:text-gray-100">
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
              <p className=" text-lg text-gray-900 dark:text-gray-100">
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
              <p className=" text-lg text-gray-900 dark:text-gray-100">
                Inicio mi nuevo trabajo, nicio mi nuevo trabajo 👌
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
}
