const { GoogleGenerativeAI } = require("@google/generative-ai");

async function test() {
  const genAI = new GoogleGenerativeAI("AIzaSyBjvodwTC63L0RjHR6Lxk1HxeWQPWLfyGw");
  
  const models = ["gemini-1.5-flash", "gemini-1.5-flash-latest", "gemini-pro", "gemini-1.0-pro"];
  
  for (const modelName of models) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("hello");
      console.log(modelName, "SUCCESS:", result.response.text().slice(0, 20));
      return;
    } catch (e) {
      console.log(modelName, "FAILED:", e.message.slice(0, 100));
    }
  }
}

test();
