import Link from "next/link";
import { blogPosts } from "@/app/blog/data";
import { notFound } from "next/navigation";
interface BlogPostProps {
  slug: string;
}

export default async function BlogPost({ slug }: BlogPostProps) {
  // 模拟服务端数据获取
  const post = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogPosts.find((post) => post.slug === slug));
    }, 10);
  });

  if (!post) {
    return notFound();
  }

  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4">
        {(post as (typeof blogPosts)[0]).title}
      </h1>
      <time className="text-sm text-gray-500 dark:text-gray-400 block mb-8">
        {(post as (typeof blogPosts)[0]).date}
      </time>

      <div className="whitespace-pre-wrap">
        {(post as (typeof blogPosts)[0]).content}
      </div>
    </article>
  );
}
