export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-8">页面未找到</h2>
      <p className="text-lg mb-8 text-center max-w-md">
        抱歉，您访问的页面不存在。可能是链接已过期或输入的地址有误。
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
      >
        返回首页
      </a>
    </div>
  );
}
