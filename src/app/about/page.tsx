import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">关于 Astral</h1>

        <section className="mb-12">
          <h2 className="text-2x`l font-semibold mb-4">什么是 Astral？</h2>
          <p className="text-lg mb-4">
            Astral 是 Autonomys
            网络的区块浏览器，为用户提供了一个直观的界面来探索和了解 Autonomys
            网络的运行状态。
          </p>
          <p className="text-lg">
            通过
            Astral，您可以实时查看网络交易、区块信息、智能合约状态等关键数据。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Autonomys 网络</h2>
          <p className="text-lg mb-4">
            Autonomys 是一个革命性的去中心化网络，专门为 AI
            驱动的去中心化应用（dApps）提供基础设施。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">分布式存储</h3>
              <p>确保 AI 相关数据的安全性和可用性</p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">分布式计算</h3>
              <p>为 AI 训练和推理提供可扩展的计算资源</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">技术栈</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Next.js - React 框架</li>
            <li>TypeScript - 类型安全</li>
            <li>Tailwind CSS - 样式设计</li>
            <li>React - 用户界面构建</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">相关资源</h2>
          <div className="space-y-4">
            <a
              href="https://explorer.autonomys.xyz/"
              className="block text-blue-500 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Astral 区块浏览器
            </a>
            <a
              href="https://autonomys.xyz/"
              className="block text-blue-500 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Autonomys 官网
            </a>
            <a
              href="https://academy.autonomys.xyz/"
              className="block text-blue-500 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Autonomys Academy
            </a>
            <a
              href="https://docs.autonomys.xyz/"
              className="block text-blue-500 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              技术文档
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
