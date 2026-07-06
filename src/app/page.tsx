import Link from 'next/link'

export default function page() {
  return (
    <div>
      <h1>Welcome to NextJs - CMS Integrations</h1>
      <h2>Ghost | Payload CMS | Strapi</h2>
      <br />
      <Link href="/blog" className='bg-blue-900 p-3 rounded-sm'>Visit Blogs Page</Link>
    </div>
  );
}
