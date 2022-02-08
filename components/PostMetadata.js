export const PostMetadata = ({ metadata }) => {
  return (
    <>
      <h2 className="text-2xl font-bold">{metadata.title}</h2>
      <div className="flex items-center">
        <span className="p-1 text-md text-gray-400">{metadata.date}</span>
      </div>
    </>
  );
};
