import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
      <p className="text-gray-600 mb-8">
        Sorry, the blog post you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-block text-blue-600 hover:text-blue-800 transition-colors"
      >
        ← Back to all posts
      </Link>
    </main>
  );
} 