import OpenAI from "openai";

// Using OpenRouter's free DeepSeek model instead of OpenAI
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY || "sk-or-v1-free-tier",
  defaultHeaders: {
    "HTTP-Referer": "https://ideavalidator.app",
    "X-Title": "IdeaValidator"
  }
});

export interface BusinessIdeaAnalysis {
  validationScore: number;
  marketSize: string;
  competitionLevel: string;
  targetAudience: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  businessModel: string;
  techStack: string[];
  estimatedCosts: string;
  timeline: string;
  risks: string[];
  opportunities: string[];
}

export interface PitchDeckSlide {
  title: string;
  content: string;
  slideType: string;
  notes?: string;
}

export async function analyzeBusinessIdea(ideaText: string): Promise<BusinessIdeaAnalysis> {
  try {
    const response = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat",
      messages: [
        {
          role: "system",
          content: `You are an expert business analyst and startup advisor. Analyze the given business idea and provide a comprehensive validation report. Focus on market viability, competition, target audience, and actionable recommendations. Be realistic but constructive in your analysis.`
        },
        {
          role: "user",
          content: `Please analyze this business idea and provide a detailed validation report in JSON format:

"${ideaText}"

Provide your analysis in the following JSON structure:
{
  "validationScore": number (0-100),
  "marketSize": string (e.g., "$2.4B TAM, $500M SAM"),
  "competitionLevel": string ("Low", "Medium", "High"),
  "targetAudience": string (detailed description),
  "strengths": array of strings,
  "weaknesses": array of strings,
  "recommendations": array of strings,
  "businessModel": string (recommended revenue model),
  "techStack": array of strings,
  "estimatedCosts": string (startup costs estimate),
  "timeline": string (development timeline),
  "risks": array of strings,
  "opportunities": array of strings
}`
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 2000,
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    return result as BusinessIdeaAnalysis;
  } catch (error) {
    console.error('OpenRouter/DeepSeek API Error:', error);
    throw new Error('Failed to analyze business idea: ' + (error as Error).message);
  }
}

export async function generatePitchDeck(analysis: BusinessIdeaAnalysis, ideaText: string): Promise<PitchDeckSlide[]> {
  try {
    const response = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat",
      messages: [
        {
          role: "system",
          content: `You are a professional pitch deck consultant. Create a compelling 10-slide pitch deck based on the business idea analysis. Each slide should be concise, professional, and investor-focused.`
        },
        {
          role: "user",
          content: `Create a 10-slide pitch deck for this business idea:

Business Idea: "${ideaText}"

Analysis Results:
- Validation Score: ${analysis.validationScore}%
- Market Size: ${analysis.marketSize}
- Competition: ${analysis.competitionLevel}
- Target Audience: ${analysis.targetAudience}
- Business Model: ${analysis.businessModel}
- Key Strengths: ${analysis.strengths.join(', ')}
- Key Recommendations: ${analysis.recommendations.join(', ')}

Create slides for:
1. Title/Problem Statement
2. Solution Overview
3. Market Opportunity
4. Business Model
5. Competition Analysis
6. Marketing Strategy
7. Financial Projections
8. Team & Operations
9. Investment Ask
10. Next Steps

Provide the response in JSON format:
{
  "slides": [
    {
      "title": "slide title",
      "content": "slide content in markdown format",
      "slideType": "title|solution|market|etc",
      "notes": "presenter notes"
    }
  ]
}`
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.8,
      max_tokens: 3000,
    });

    const result = JSON.parse(response.choices[0].message.content || '{"slides": []}');
    return result.slides as PitchDeckSlide[];
  } catch (error) {
    console.error('OpenRouter/DeepSeek API Error:', error);
    throw new Error('Failed to generate pitch deck: ' + (error as Error).message);
  }
}

export async function generateRandomIdea(): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat",
      messages: [
        {
          role: "system",
          content: "You are a creative business idea generator. Generate innovative, realistic startup ideas across various industries."
        },
        {
          role: "user",
          content: "Generate a random, innovative business idea. Make it specific, actionable, and market-oriented. Include the target audience, core value proposition, and basic implementation approach. Keep it under 200 words."
        }
      ],
      temperature: 0.9,
      max_tokens: 300,
    });

    return response.choices[0].message.content || "A mobile app that helps users discover and book unique local experiences.";
  } catch (error) {
    console.error('OpenRouter/DeepSeek API Error:', error);
    throw new Error('Failed to generate random idea: ' + (error as Error).message);
  }
}
