import Link from "next/link";
import BlogPost from "@/components/blog/BlogPost";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/blog"
          className="inline-block mb-8 text-blue-500 hover:text-blue-600"
        >
          ← 返回博客列表
        </Link>

        <BlogPost slug={params.slug} />
      </main>
    </div>
  );
}
