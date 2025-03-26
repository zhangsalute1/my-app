export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "autonomys-network-introduction",
    title: "Autonomys 网络介绍：AI 驱动的去中心化未来",
    date: "2024-03-26",
    excerpt:
      "探索 Autonomys 网络如何通过 AI 技术革新去中心化应用领域，为开发者提供强大的基础设施支持。",
    content: `
# Autonomys 网络介绍：AI 驱动的去中心化未来

Autonomys 网络是一个革命性的去中心化平台，专门为 AI 驱动的去中心化应用（dApps）提供基础设施支持。本文将深入探讨 Autonomys 的核心特性和技术优势。

## 核心特性

### 1. 分布式存储系统
Autonomys 的分布式存储系统确保了 AI 相关数据的安全性和可用性。通过创新的存储机制，系统能够：
- 高效处理大规模 AI 数据集
- 确保数据的安全性和隐私性
- 提供快速的数据访问和检索

### 2. 分布式计算能力
网络提供强大的分布式计算资源，支持：
- AI 模型训练
- 实时推理
- 复杂计算任务

## 技术优势

Autonomys 网络采用了一系列先进技术：
- 高性能共识机制
- 智能合约支持
- 跨链互操作性
- 可扩展性设计

## 未来展望

随着 AI 技术的不断发展，Autonomys 网络将继续创新，为去中心化 AI 应用提供更强大的支持。我们期待看到更多基于 Autonomys 的创新应用出现。
    `,
  },
  {
    slug: "astral-explorer-guide",
    title: "Astral 区块浏览器使用指南",
    date: "2024-03-25",
    excerpt:
      "了解如何使用 Astral 区块浏览器探索 Autonomys 网络，查看交易、区块和智能合约信息。",
    content: `
# Astral 区块浏览器使用指南

Astral 是 Autonomys 网络的官方区块浏览器，为用户提供了一个直观的界面来探索和了解网络状态。本指南将帮助您快速掌握 Astral 的使用方法。

## 主要功能

### 1. 区块浏览
- 查看最新区块
- 区块详情信息
- 交易历史记录

### 2. 交易查询
- 实时交易监控
- 交易详情查看
- 交易状态追踪

### 3. 智能合约
- 合约部署信息
- 合约交互记录
- 合约状态查询

## 使用技巧

1. 使用搜索功能快速查找特定区块或交易
2. 通过筛选器优化查询结果
3. 关注重要指标和统计数据

## 高级功能

对于开发者，Astral 还提供了：
- API 接口
- 开发者工具
- 调试功能

希望本指南能帮助您更好地使用 Astral 区块浏览器！
    `,
  },
];
