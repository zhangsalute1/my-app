import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            欢迎来到 Astral
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            探索 Autonomys 网络的区块浏览器，实时查看网络状态和交易信息。
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Button size="lg" asChild>
              <Link href="/about">了解更多</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">查看博客</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="features" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="features">核心功能</TabsTrigger>
            <TabsTrigger value="technology">技术栈</TabsTrigger>
            <TabsTrigger value="ecosystem">生态系统</TabsTrigger>
          </TabsList>
          <TabsContent value="features">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>区块浏览</CardTitle>
                  <CardDescription>实时查看区块信息</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>探索最新区块、交易记录和网络状态。</p>
                </CardContent>
                <CardFooter>
                  <Badge variant="secondary">实时数据</Badge>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>智能合约</CardTitle>
                  <CardDescription>合约交互与分析</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>查看和分析智能合约的执行情况。</p>
                </CardContent>
                <CardFooter>
                  <Badge variant="secondary">合约分析</Badge>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>网络统计</CardTitle>
                  <CardDescription>网络性能监控</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>监控网络性能指标和统计数据。</p>
                </CardContent>
                <CardFooter>
                  <Badge variant="secondary">性能监控</Badge>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="technology">
            <Card>
              <CardHeader>
                <CardTitle>技术架构</CardTitle>
                <CardDescription>使用现代化的技术栈构建</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>shadcn/ui</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="ecosystem">
            <Card>
              <CardHeader>
                <CardTitle>Autonomys 生态系统</CardTitle>
                <CardDescription>完整的去中心化 AI 基础设施</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">存储</Badge>
                  <span>分布式存储解决方案</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">计算</Badge>
                  <span>分布式计算资源</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">应用</Badge>
                  <span>去中心化 AI 应用</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
