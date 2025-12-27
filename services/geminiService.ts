
import { GoogleGenAI, Type } from "@google/genai";
import { AuditRequest, AuditResponse } from "../types";

export const generateAuditResponse = async (data: AuditRequest): Promise<AuditResponse> => {
  const apiKey = process.env.API_KEY;

  const fallbackResponse: AuditResponse = {
    analysis: `Our Seattle-based scanners detect significant thermal leaks in your ${data.brandName} listing profile. The competitive canopy is dense, but your current trajectory is missing the high-intent currents needed for category leadership.`,
    quickWins: [
      "Aggressive re-allocation of spend toward high-indexing 'trophy' keywords.",
      "Immediate activation of Amazon Brand Registry defensive layers.",
      "Surgical pruning of non-converting long-tail traffic to lower ACOS instantly."
    ],
    strategicVision: "Your brand has the wingspan to dominate this niche. We recommend an immediate 15-minute Digital Dive with our lead Seattle strategists to map out your path to apex status."
  };

  if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return fallbackResponse;
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    You are the 'Lead Digital Falconer' for e-Falconry, an elite Amazon growth agency based in Seattle, WA.
    Analyze the following Amazon Seller brand with the precision of a predator:
    Brand: ${data.brandName}
    Monthly Revenue: ${data.monthlyRevenue}
    Current ACOS: ${data.currentAcos}
    Primary Pain Point: ${data.topPainPoint}

    Your tone must be sophisticated, lethal, and native to the Seattle/Amazon tech ecosystem. Use falconry metaphors mixed with heavy Amazon terminology (FBA, Buy Box, ACOS, ROAS, Flywheel, Brand Registry, Listing Indexing).
    
    Structure your response as:
    1. 'The Scan' (Analysis): A high-altitude, tactical look at their current position. Mention 'Seattle-based insights'.
    2. 'The Dive' (Quick Wins): 3 immediate, high-impact tactical strikes.
    3. 'The Apex Vision' (Strategic Vision): The long-term flight path to account dominance.
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
            analysis: { type: Type.STRING },
            quickWins: { type: Type.ARRAY, items: { type: Type.STRING } },
            strategicVision: { type: Type.STRING }
          },
          required: ["analysis", "quickWins", "strategicVision"]
        }
      }
    });

    if (!response.text) return fallbackResponse;
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return fallbackResponse;
  }
};
