import { getAllPosts, getPostExcerpt } from '@/lib/blog';
import Link from 'next/link';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-2xl font-semibold mb-2 text-slate-300 hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-2">By {post.author}</p>
            <p className="text-gray-700">{getPostExcerpt(post.content)}</p>
            <Link
              href={`/posts/${post.id}`}
              className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-colors"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
