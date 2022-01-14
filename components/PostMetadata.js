export const PostMetadata = ({ metadata }) => {
  return (
    <>
      <h2 className="text-2xl font-bold">{metadata.title}</h2>
      <p>{metadata.date}</p>
    </>
  );
};
