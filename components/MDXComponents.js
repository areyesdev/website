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
  h2: (props) => <h2 className="font-bold text-3xl" {...props} />,
  h3: (props) => <h3 className="font-bold text-2xl" {...props} />,
  h4: (props) => <h4 className="font-bold text-xl" {...props} />,
  Image: RoundedImage,
};
