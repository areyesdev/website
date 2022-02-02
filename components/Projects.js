/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section className="mt-8">
      <div>
        <h2 className="font-bold text-2xl md:text-4xl tracking-tight text-black dark:text-white mb-2">
          Proyectos
        </h2>
        <p>
          Estos son algunos de mis prooyectos más destacados que he desarrollado durande mi
          preparación como Developer.
        </p>
      </div>

      <article className="flex flex-col md:flex-row relative w-full md:h-80 justify-end mt-8">
        <a
          href="https://buildingai.elementsofai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-7/12 bg-white relative md:absolute md:left-0 rounded shadow-xl overflow-hidden moveUp">
          <Image alt="Portfolio areyesdev" width={650} height={400} src="/projects/portfolio.png" />
        </a>
        <div className="flex flex-col text-right z-10 w-full md:w-6/12">
          <h3 className="text-gray-700 dark:text-gray-200">areyesdev</h3>
          <p className="font-semibold text-gray-500 dark:text-gray-300">Portafolio web</p>
          <div className="bg-white py-3 px-4 rounded shadow-xl dark:text-gray-700">
            <p>
              Portafolio desarrollado con diferentes tecnologias y con buenas practicas de
              desarrollo.
            </p>
          </div>
          <div className="flex flex-row justify-end mt-8">
            <span className="ml-3">NextJS</span>
            <span className="ml-3">MDX</span>
            <span className="ml-3">TailwindCSS</span>
          </div>
          <div className="flex flex-row justify-end mt-4">
            <a
              href="https://ecommerce-store-stripe.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300">
              <FiExternalLink size={24} />
            </a>
          </div>
        </div>
      </article>

      <article className="flex flex-col-reverse md:flex-row relative w-full md:h-80 mt-8">
        <div className="flex flex-col z-10 w-full md:w-6/12">
          <h3 className="text-gray-700 dark:text-gray-200">Space Jelly Sjop</h3>
          <p className="font-semibold text-gray-500 dark:text-gray-300">
            Ecommerce Store - Checkout Stripe
          </p>
          <div className="bg-white py-3 px-4 rounded shadow-xl dark:text-gray-700">
            <p>
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </p>
          </div>
          <div className="flex flex-row mt-8">
            <span className="ml-3">NextJS</span>
            <span className="ml-3">Stripe</span>
            <span className="ml-3">React Icons</span>
          </div>
          <div className="flex flex-row mt-4">
            <a
              href="https://equals.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300">
              <FiExternalLink size={24} />
            </a>
          </div>
        </div>
        <a
          href="https://ecommerce-store-stripe.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-7/12 bg-grayBrand relative md:absolute md:right-0 rounded shadow-xl overflow-hidden moveUp">
          <Image width={650} height={400} alt="ecommerce store" src="/projects/ecommerce.png" />
        </a>
      </article>
    </section>
  );
}
