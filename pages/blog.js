import Link from "next/link";

import { getAllFilesFrontMatter } from "@/lib/mdx";

export default function Blog({ posts }) {
  return (
    <div className="container">
      <main>
        <h1>Blog</h1>

        <div>
          {posts.map((post) => (
            <Link key={post.slug} href={post.slug}>
              <a>
                <h2>{post.title} &rarr;</h2>
                <p>{post.date}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("posts");
  return {
    props: { posts },
  };
}
