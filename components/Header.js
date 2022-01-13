import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import MobileMenu from "./MobileMenu";

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all",
        )}>
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <nav className="flex items-center justify-between w-full max-w-5xl p-8 mx-auto my-0 bg-white sticky-nav md:my-8 dark:bg-black bg-opacity-60">
      <a href="#skip" className="sr-only focus:not-sr-only">
        Ir al contenido
      </a>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className="w-4 h-4 text-gray-800 dark:text-gray-200">
            {theme === "dark" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        )}
      </button>
      <div className="ml-[-0.60rem]">
        <MobileMenu />
        <NavItem href="/" text="Home" />
        <NavItem href="/about" text="Sobre mí" />
        <NavItem href="/blog" text="Blog" />
      </div>
    </nav>
  );
}
