export const Layout = ({ children }) => {
  return (
    <div>
      <main className="flex flex-col items-start max-w-2xl mx-auto mb-16 ">{children}</main>
    </div>
  );
};
