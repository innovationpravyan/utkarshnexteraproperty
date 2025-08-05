// Implemented a Genkit flow to recommend properties based on user preferences.

'use server';

/**
 * @fileOverview A property recommendation AI agent.
 *
 * - recommendProperties - A function that handles property recommendations.
 * - RecommendPropertiesInput - The input type for the recommendProperties function.
 * - RecommendPropertiesOutput - The return type for the recommendProperties function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RecommendPropertiesInputSchema = z.object({
  preferences: z.object({
    location: z.string().describe('The desired city or area for the property.'),
    propertyType: z.enum(['Apartment', 'Villa', 'Independent House']).describe('The type of property.'),
    budget: z.enum(['low', 'medium', 'high']).describe('The budget range.'),
  }),
});
export type RecommendPropertiesInput = z.infer<typeof RecommendPropertiesInputSchema>;

const RecommendedPropertySchema = z.object({
    category: z.string().describe("The category of the property (e.g., 'Renovation', 'Construction')."),
    title: z.string().describe('The title of the property.'),
    description: z.string().describe('A short description of the property.'),
    imageUrl: z.string().describe('A placeholder image URL for the property.'),
});
export type RecommendedProperty = z.infer<typeof RecommendedPropertySchema>;


const RecommendPropertiesOutputSchema = z.object({
  recommendations: z.array(RecommendedPropertySchema).length(3).describe('A list of 3 recommended properties.'),
});
export type RecommendPropertiesOutput = z.infer<typeof RecommendPropertiesOutputSchema>;

export async function recommendProperties(input: RecommendPropertiesInput): Promise<RecommendPropertiesOutput> {
  return recommendPropertiesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendPropertiesPrompt',
  input: { schema: RecommendPropertiesInputSchema },
  output: { schema: RecommendPropertiesOutputSchema },
  prompt: `You are a real estate expert. Based on the following user preferences, recommend 3 properties.
For each property, provide a category, title, description, and a placeholder image URL from 'https://placehold.co/600x400.png'.

User Preferences:
Location: {{{preferences.location}}}
Property Type: {{{preferences.propertyType}}}
Budget: {{{preferences.budget}}}
`,
});

const recommendPropertiesFlow = ai.defineFlow(
  {
    name: 'recommendPropertiesFlow',
    inputSchema: RecommendPropertiesInputSchema,
    outputSchema: RecommendPropertiesOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
