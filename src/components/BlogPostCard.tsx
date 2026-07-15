import Image from "next/image";
import Link from "next/link";
import type { PostOrPage } from "@tryghost/content-api";

function formatDate(dateString?: string | null) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPostCard({ post }: { post: PostOrPage }) {
  const author = post.primary_author;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg dark:bg-neutral-900 dark:ring-white/10"
    >
      <div className="relative aspect-[16/10] w-full bg-neutral-200 dark:bg-neutral-800">
        {post.feature_image && (
          <Image
            src={post.feature_image}
            alt={post.feature_image_alt || post.title || ""}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h2 className="line-clamp-1 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {post.title}
        </h2>
        <p className="line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between gap-3 bg-neutral-50 px-5 py-4 dark:bg-neutral-800/50">
        <div className="flex items-center gap-3">
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

        <span
          aria-hidden="true"
          className="shrink-0 rounded-full p-2 text-neutral-400"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M6 3a1 1 0 0 0-1 1v17l7-5 7 5V4a1 1 0 0 0-1-1H6Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
