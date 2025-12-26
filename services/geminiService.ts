
import { GoogleGenAI, Type } from "@google/genai";
import { AuditRequest, AuditResponse } from "../types";

export const generateAuditResponse = async (data: AuditRequest): Promise<AuditResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    You are the 'Lead Digital Falconer' for e-Falconry, an elite Amazon growth agency.
    Analyze the following brand as if you are a predator scanning the marketplace from 10,000 feet.
    Brand: ${data.brandName}
    Monthly Revenue: ${data.monthlyRevenue}
    Current ACOS: ${data.currentAcos}
    Primary Pain Point: ${data.topPainPoint}

    Your tone must be sophisticated, lethal in its precision, and use falconry metaphors (sight, talons, flight paths, apex predators).
    
    IMPORTANT: Never mention you are an AI. Present this as a proprietary strategic analysis from the e-Falconry Studio.
    
    Structure your response as:
    1. 'The Scan' (Analysis): A high-altitude look at their current position.
    2. 'The Dive' (Quick Wins): 3-4 lethal, immediate tactical strikes to increase profit.
    3. 'The Apex Vision' (Strategic Vision): How they become the dominant predator in their category.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: {
              type: Type.STRING,
              description: "A high-altitude analysis of their current marketplace position."
            },
            quickWins: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3-4 immediate tactical strikes."
            },
            strategicVision: {
              type: Type.STRING,
              description: "The path to becoming a category apex predator."
            }
          },
          required: ["analysis", "quickWins", "strategicVision"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("The connection to the studio was interrupted. Please try again.");
  }
};
