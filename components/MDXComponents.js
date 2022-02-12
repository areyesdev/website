/* eslint-disable jsx-a11y/heading-has-content */
import Image from "next/image";

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

export const MDXComponents = {
  h2: (props) => <h1 className="font-bold text-3xl" {...props} />,
  Image: RoundedImage,
};
