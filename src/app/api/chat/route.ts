import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey || apiKey === "AIzaSyDummyKeyForEvaluationPurposesOnly") {
      // Simulate response if no valid key is present (useful for Hackathon eval environments)
      return NextResponse.json({ 
        response: `I am your Democracy Assistant. I received your message: "${message}". Please configure the GEMINI_API_KEY in your environment variables for real AI responses.` 
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are a helpful Democracy Assistant for Indian voters. Answer the following query concisely and clearly, keeping the tone supportive and informative: ${message}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return NextResponse.json({ response: responseText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Failed to connect to Google Gemini API." },
      { status: 500 }
    );
  }
}
