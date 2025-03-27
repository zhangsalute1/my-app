import { NextResponse } from "next/server";

// GET 请求处理
export async function GET() {
  const data = {
    message: "Hello from GET API",
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(data);
}

// POST 请求处理
export async function POST(request: Request) {
  const body = await request.json();

  const data = {
    message: "Hello from POST API",
    receivedData: body,
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(data);
}
