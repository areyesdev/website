/* eslint-disable jsx-a11y/heading-has-content */
import Image from "next/image";

function RoundedImage(props) {
  return (
    <Image
      width={props.width}
      height={props.height}
      alt={props.caption}
      className="rounded-xl"
      src={props.src}
    />
  );
}

export const MDXComponents = {
  Image: RoundedImage,
};
