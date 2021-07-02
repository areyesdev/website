import Image from "next/image";

import Container from "@/components/Container";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          ¡Hola 👋! <br /> Soy Andres Reyes
        </h1>
        <div className="flex flex-col items-center py-4 mt-8 bg-gray-800 border-l-8 border-green-300 md:flex-row rounded-xl">
          <h2 className="pl-4 text-lg text-gray-400 dark:text-gray-400 md:pr-4 mb-11 md:mb-0">
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
      </div>
    </Container>
  );
}
