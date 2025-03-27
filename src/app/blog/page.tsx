import BlogList from "@/components/blog/BlogList";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">博客文章</h1>
        <BlogList />
      </main>
    </div>
  );
}
