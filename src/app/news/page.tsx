import { getPostFilered } from "@/lib/posts";
import BlogPostCard from "@/components/BlogPostCard";

export default async function NewsPage() {
  const posts = await getPostFilered("news", 1, 10);
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
        News
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
