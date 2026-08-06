import Link from "next/link";

export default function page() {
  return (
    <div className="m-8">
      <h1>Welcome to NextJs - CMS Integrations</h1>
      <h2 className="mb-8 font-bold">Ghost Headless</h2>

      <Link href="/news" className="bg-green-400 p-3 rounded-sm mr-2">
        News
      </Link>

      <Link href="/news" className="bg-amber-300 p-3 rounded-sm mr-2">
        CSR Projects
      </Link>

      <Link href="/blog" className="bg-blue-900 p-3 rounded-sm mr-2">
        Visit All Page
      </Link>
    </div>
  );
}
