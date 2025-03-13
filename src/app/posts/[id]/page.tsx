import { getAllPosts, getPostById } from '@/lib/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type PageParams = {
  id: string;
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const id = parseInt(params.id);
  if (isNaN(id)) {
    return {
      title: 'Post Not Found',
    };
  }
  const post = await getPostById(id);
  return {
    title: post.title,
    description: post.content.substring(0, 160),
  };
}

export async function generateStaticParams(): Promise<PageParams[]> {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

type PageProps = {
  params: PageParams;
  searchParams?: { [key: string]: string | string[] | undefined };
}

const BlogPost = async ({ params }: PageProps) => {
  const id = parseInt(params.id);
  
  if (isNaN(id)) {
    notFound();
  }

  const post = await getPostById(id);

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-8 text-blue-600 hover:text-blue-800 transition-colors"
      >
        ← Back to all posts
      </Link>
      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-8">By {post.author}</p>
        <div className="whitespace-pre-wrap">{post.content}</div>
      </article>
    </main>
  );
}

export default BlogPost; 