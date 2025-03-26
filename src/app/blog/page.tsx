import Link from "next/link";
import { blogPosts } from "./data";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">博客文章</h1>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-200 dark:border-gray-700 pb-8"
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h2>
                <time className="text-sm text-gray-500 dark:text-gray-400 mb-3 block">
                  {post.date}
                </time>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
