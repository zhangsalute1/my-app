import Link from "next/link";
import { blogPosts } from "@/app/blog/data";

export default async function BlogList() {
  // 模拟服务端数据获取
  const posts = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogPosts);
    }, 10);
  });

  return (
    <div className="space-y-8">
      {(posts as typeof blogPosts).map((post) => (
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
  );
}
