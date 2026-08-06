import { getPostFilered } from "@/lib/posts";
import BlogPostCard from "@/components/BlogPostCard";

export default async function CSRPage() {
  const posts = await getPostFilered("csr", 1, 10);
  console.log("POSTS are " + JSON.stringify(posts));
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
        CSR
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
