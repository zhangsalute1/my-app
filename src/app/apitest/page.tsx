"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function ApiTestPage() {
  const [getResult, setGetResult] = useState<string>("");
  const [postResult, setPostResult] = useState<string>("");
  const [postData, setPostData] = useState<string>(
    '{\n  "name": "测试",\n  "message": "Hello World"\n}'
  );
  const [isLoading, setIsLoading] = useState({
    get: false,
    post: false,
  });

  const handleGetTest = async () => {
    setIsLoading((prev) => ({ ...prev, get: true }));
    try {
      const response = await fetch("/api/test");
      const data = await response.json();
      setGetResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setGetResult("请求出错：" + error);
    } finally {
      setIsLoading((prev) => ({ ...prev, get: false }));
    }
  };

  const handlePostTest = async () => {
    setIsLoading((prev) => ({ ...prev, post: true }));
    try {
      const response = await fetch("/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: postData,
      });
      const data = await response.json();
      setPostResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setPostResult("请求出错：" + error);
    } finally {
      setIsLoading((prev) => ({ ...prev, post: false }));
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-light mb-12 text-center">API 测试</h1>

      <div className="space-y-12">
        {/* GET 请求区域 */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-light">GET 请求</h2>
            <Button
              variant="outline"
              onClick={handleGetTest}
              disabled={isLoading.get}
              className="min-w-[120px]"
            >
              {isLoading.get ? "请求中..." : "发送请求"}
            </Button>
          </div>

          {getResult && (
            <Card className="bg-gray-50 dark:bg-gray-900 border-0 shadow-sm">
              <CardContent className="p-6">
                <pre className="font-mono text-sm overflow-auto">
                  <code>{getResult}</code>
                </pre>
              </CardContent>
            </Card>
          )}
        </section>

        {/* POST 请求区域 */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-light">POST 请求</h2>
            <Button
              variant="outline"
              onClick={handlePostTest}
              disabled={isLoading.post}
              className="min-w-[120px]"
            >
              {isLoading.post ? "请求中..." : "发送请求"}
            </Button>
          </div>

          <div className="space-y-6">
            <Textarea
              value={postData}
              onChange={(e) => setPostData(e.target.value)}
              placeholder="输入 JSON 数据"
              className="font-mono text-sm bg-gray-50 dark:bg-gray-900 border-0 shadow-sm resize-y"
              rows={6}
            />

            {postResult && (
              <Card className="bg-gray-50 dark:bg-gray-900 border-0 shadow-sm">
                <CardContent className="p-6">
                  <pre className="font-mono text-sm overflow-auto">
                    <code>{postResult}</code>
                  </pre>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
