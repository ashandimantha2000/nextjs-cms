import { getPostBySlug } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

function formatDate(dateString?: string | null) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = post.primary_author;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
        {post.title}
      </h1>

      <div className="mt-4 flex items-center gap-3">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
          {author?.profile_image && (
            <Image
              src={author.profile_image}
              alt={author.name || ""}
              fill
              sizes="36px"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            {author?.name || "Unknown"}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {formatDate(post.published_at)}
          </p>
        </div>
      </div>

      {post.feature_image && (
        <div className="relative mt-8 w-full overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800">
          <Image
            src={post.feature_image}
            alt={post.feature_image_alt || post.title || ""}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      <div
        className="mt-8 space-y-4 text-neutral-700 [&_a]:text-blue-600 [&_a]:underline [&_figure]:my-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-neutral-900 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-neutral-900 [&_img]:rounded-xl dark:text-neutral-300 dark:[&_h2]:text-neutral-100 dark:[&_h3]:text-neutral-100"
        dangerouslySetInnerHTML={{ __html: post.html || "" }}
      />
    </main>
  );
}
