/* eslint-disable jsx-a11y/accessible-emoji */
import Image from "next/image";

import Container from "@/components/Container";
import Project from "@/components/Projects";
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
            <span className="text-gray-700 font-semibold underline decoration-3 decoration-blue-300 dark:text-gray-200 mb-4">
              FrontEnd Developer
            </span>
            <p className="mb-16">
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
              src="/static/images/profile.png"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <Skills />
        <Project />
        <section>
          <h2 className="font-bold text-2xl md:text-4xl tracking-tight text-black dark:text-white mb-4">
            ¿Quieres Contactar?
          </h2>
          <p>
            No dude en enviarme un mensaje si tiene alguna oferta interesante o alguna pregunta.
          </p>
          <p>
            Utiliza{" "}
            <a
              href="mailto:areyesdev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              areyesdev@gmail.com ✉️
            </a>
            para ponerse en contacto conmigo.
          </p>
        </section>
      </div>
    </Container>
  );
}
