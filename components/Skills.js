import Image from "next/image";

const ExternalLink = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export default function Skills() {
  const height = 90;
  const width = 90;

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight text-black dark:text-white mb-2">
        Skill tecnológicos y herramientas
      </h3>
      <p className="mb-6">
        Me encanta aprender tecnologías nuevas y emocionantes. Estas son algunas de las que manejo
        en mi 🌞.
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-y-8 gap-x-10 mb-16">
        <div className="bg-white rounded shadow-lg justify-center items-center flex flex-col dark:text-gray-700 moveUp">
          <ExternalLink href="https://developer.mozilla.org/es/docs/Web/HTML">
            <Image alt="HTML logo" height={height} width={width} src="/logos/html.png" />
          </ExternalLink>
        </div>
        <div className="bg-white rounded shadow-lg justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
          <ExternalLink href="https://developer.mozilla.org/es/docs/Web/CSS">
            <Image
              alt="CSS logo"
              height={height}
              width={width}
              src="/logos/css.png"
              className="object-contain"
            />
          </ExternalLink>
        </div>
        <div className="bg-white rounded shadow-lg justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
          <ExternalLink href="https://developer.mozilla.org/es/docs/Web/JavaScript">
            <Image alt="JavaScript logo" height={height} width={width} src="/logos/js.png" />
          </ExternalLink>
        </div>
        <div className="bg-white rounded shadow-lg justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
          <ExternalLink href="https://git-scm.com/">
            <Image alt="Git logo" height={height} width={width} src="/logos/git.png" />
          </ExternalLink>
        </div>
        <div className="bg-white rounded shadow-lg justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
          <ExternalLink href="https://graphql.org/">
            <Image alt="GraphQL logo" height={height} width={width} src="/logos/graphql.png" />
          </ExternalLink>
        </div>
        <div className="bg-white rounded shadow-lg justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
          <ExternalLink href="https://reactjs.org/">
            <Image
              alt="React logo"
              height={height}
              width={width}
              src="/logos/react.png"
              className="object-cover"
            />
          </ExternalLink>
        </div>
        <div className="bg-white rounded shadow-lg justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
          <ExternalLink href="https://nextjs.org/">
            <Image
              alt="Next.js logo"
              height={height}
              width={width}
              src="/logos/nextjs.png"
              className="object-contain"
            />
          </ExternalLink>
        </div>
        <div className="bg-white rounded shadow-lg justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
          <ExternalLink href="https://jestjs.io/">
            <Image
              alt="Jest logo"
              height={height}
              width={width}
              src="/logos/jest.png"
              className="object-contain"
            />
          </ExternalLink>
        </div>
        <div className="bg-white rounded shadow-lg justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
          <ExternalLink href="https://nodejs.org/">
            <Image
              alt="Node.js logo"
              height={height}
              width={width}
              src="/logos/nodejs.png"
              className="object-contain"
            />
          </ExternalLink>
        </div>
        <div className="bg-white rounded shadow-lg justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
          <ExternalLink href="https://github.com/">
            <Image alt="GitHub logo" height={height} width={width} src="/logos/github_dark.png" />
          </ExternalLink>
        </div>
        <div className="bg-white rounded shadow-lg justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
          <ExternalLink href="https://code.visualstudio.com/">
            <Image
              alt="Visual Studio Code logo"
              height={height}
              width={width}
              src="/logos/vscode.png"
            />
          </ExternalLink>
        </div>
      </div>
    </>
  );
}
