import { PostMetadata } from "./PostMetadata";

export const Layout = ({ children, metadata = {} }) => {
  return (
    <div>
      <main className="flex flex-col items-start max-w-2xl mx-auto mb-16 ">
        <PostMetadata metadata={metadata} />
        {children}
      </main>
    </div>
  );
};
