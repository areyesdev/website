import NextLink from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 bg-white sticky-nav md:my-8 dark:bg-black bg-opacity-60">
        <div className="flow-root ...">
          <div className="my-4 ...">
            <p>Hecho con ♥ Designed and Developer @areyesdev</p>
          </div>
        </div>
        <div className="flow-root ...">
          <div className="my-4 ...">
            <button
              type="button"
              className="h-10 p-1 bg-blue-500 rounded dark:bg-blue-500 w-30"
            >
              <NextLink href="/cv.pdf">
                <a
                  target="_blank"
                  className="p-2 text-white md:p-4 dark:text-gray-100"
                >
                  Curriculum
                </a>
              </NextLink>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
