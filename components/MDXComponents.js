/* eslint-disable jsx-a11y/heading-has-content */
import Image from "next/image";

import ImageWithTheme from "@/components/ImageWithThemes";

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

export const MDXComponents = {
  h1: (props) => <h1 className="font-bold" {...props} />,
  p: (props) => <p className="text-md" {...props} />,
  Image: RoundedImage,
  ImageWithTheme,
};
