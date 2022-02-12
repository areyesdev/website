/* eslint-disable jsx-a11y/heading-has-content */
import Image from "next/image";
import { GoMarkGithub } from "react-icons/go";

import Skills from "./Skills";

function RoundedImage(props) {
  return (
    <Image
      width={props.width}
      height={props.height}
      alt={props.alt}
      className="rounded-xl "
      src={props.src}
    />
  );
}

function IconGithub(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-white mr-2">
      <GoMarkGithub size={props.size} />
    </a>
  );
}

export const MDXComponents = {
  h2: (props) => <h1 className="font-bold text-5xl" {...props} />,
  p: (props) => <p className="text-xl" {...props} />,
  Image: RoundedImage,
  IconGithub,
  Skills,
};
