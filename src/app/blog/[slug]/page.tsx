import { blogPosts } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/blog"
          className="inline-block mb-8 text-blue-500 hover:text-blue-600"
        >
          ← 返回博客列表
        </Link>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <time className="text-sm text-gray-500 dark:text-gray-400 block mb-8">
            {post.date}
          </time>

          <div className="whitespace-pre-wrap">{post.content}</div>
        </article>
      </main>
    </div>
  );
}
