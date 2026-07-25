import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export async function askSmartNepalAI(
  prompt: string,
  history: Array<{ role: string; content: string }> = [],
) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemInstruction = `
      You are Smart Nepal AI, an official digital assistant for Nepali citizens.
      You provide accurate, polite, and helpful information about Nepal's Government services (Passport, License, PAN, Citizenship),
      Emergency contacts, Blood Donation, Agriculture guidelines, and Local Services.
      Respond fluently in both English and Nepali based on the user's input.
    `;

    const chat = model.startChat({
      history: history.map((h) => ({
        role: h.role === "user" ? "user" : "model",
        parts: [{ text: h.content }],
      })),
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.3,
      },
    });

    const result = await chat.sendMessage([
      { text: `${systemInstruction}\n\nUser Question: ${prompt}` },
    ]);

    return result.response.text();
  } catch (error) {
    console.error("AI Generation Error:", error);
    return "माफ गर्नुहोला, सेवा हाल उपलव्ध छैन। कृपया केही समय पछि प्रयास गर्नुहोस्। (Service currently unavailable. Please try again later.)";
  }
}
