import {
  GoogleGenerativeAI,
  FunctionDeclaration,
  SchemaType,
} from "@google/generative-ai";

import { getSchemaAsText } from "./schemaReader";

// init AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// -----------------------------
// TOOL definition
// -----------------------------
const tools = [
  {
    functionDeclarations: [
      {
        name: "query",
        description: "Query the database using Prisma",
        parameters: {
          type: SchemaType.OBJECT,
          properties: {
            model: {
              type: SchemaType.STRING,
              description: "Model name เช่น User, Order",
            },
            action: {
              type: SchemaType.STRING,
              description:
                "Action เช่น findMany, findFirst, findUnique, count",
            },
            args: {
              type: SchemaType.OBJECT,
              description: "Prisma arguments",
              properties: {},
            },
          },
          required: ["model", "action"],
        },
      } as FunctionDeclaration,
    ],
  },
];

// -----------------------------
// MAIN FUNCTION
// -----------------------------
export async function askAI(userMessage: string): Promise<string> {
  const schemaText = getSchemaAsText();

  const systemInstruction = `
You are an AI assistant that helps users query a database.
You have access to the following database schema:

${schemaText}

Rules:
- Always use the "query" tool to retrieve data. Never answer from memory.
- Never write raw SQL.
- Only use models and fields in the schema above.
- Keep responses concise and in the same language as the user.
`.trim();

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-lite",
    systemInstruction,
    tools,
  });

  const chat = model.startChat();

  let response = await chat.sendMessage(userMessage);

  // -----------------------------
  // handle function call loop
  // -----------------------------
  while (response.response.functionCalls()?.length) {
    const calls = response.response.functionCalls();

    const results = await Promise.all(
      calls!.map(async (call) => {
        const { runQuery } = await import("../tools/queryTool");

        const args = call.args as Record<string, unknown>;

        const result = await runQuery({
          model: args.model,
          action: args.action,
          args: args.args,
        });

        return {
          functionResponse: {
            name: call.name,
            response: { result },
          },
        };
      })
    );

    response = await chat.sendMessage(results);
  }

  return response.response.text();
}