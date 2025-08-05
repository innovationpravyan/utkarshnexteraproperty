
'use server';

/**
 * @fileOverview A simple flow to answer property-related questions.
 *
 * - answerPropertyQuestions - A function that provides a static response to user questions.
 * - PropertyQuestionInput - The input type for the answerPropertyQuestions function.
 * - PropertyQuestionOutput - The return type for the answerPropertyQuestions function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PropertyQuestionInputSchema = z.object({
  question: z.string().describe('The user\'s question about a property.'),
});
export type PropertyQuestionInput = z.infer<typeof PropertyQuestionInputSchema>;

const PropertyQuestionOutputSchema = z.object({
  answer: z.string().describe('A helpful response to the user\'s question.'),
});
export type PropertyQuestionOutput = z.infer<typeof PropertyQuestionOutputSchema>;

export async function answerPropertyQuestions(input: PropertyQuestionInput): Promise<PropertyQuestionOutput> {
  // For this version, we provide a static, helpful response.
  // This avoids reliance on a generative model and provides a consistent user experience.
  const staticResponse = {
    answer: "Thanks for your question! For detailed inquiries and personalized assistance, the best way to get in touch is by contacting us directly through our contact page or WhatsApp. Our experts are ready to help you with your construction needs."
  };
  return staticResponse;
}

// Although we are not using a generative AI flow here, we can define it for consistency.
// In a real scenario, this flow could be expanded to include AI-powered responses.
const answerPropertyQuestionsFlow = ai.defineFlow(
  {
    name: 'answerPropertyQuestionsFlow',
    inputSchema: PropertyQuestionInputSchema,
    outputSchema: PropertyQuestionOutputSchema,
  },
  async (input) => {
    // This flow simply returns the static response.
    return {
      answer: "Thanks for your question! For detailed inquiries and personalized assistance, the best way to get in touch is by contacting us directly through our contact page or WhatsApp. Our experts are ready to help you with your construction needs."
    };
  }
);
