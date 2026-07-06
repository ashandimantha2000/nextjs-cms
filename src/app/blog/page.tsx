import { getPosts } from "@/lib/posts";
import Image from "next/image";

export default async function BlogPage() {
  const posts = await getPosts();

  console.log("POSTS are = " + JSON.stringify(posts));

  return (
    <main>
      <h1>Blog</h1>

      {posts.map((post: any) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Image
            src={post.feature_image}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </article>
      ))}
    </main>
  );
}
