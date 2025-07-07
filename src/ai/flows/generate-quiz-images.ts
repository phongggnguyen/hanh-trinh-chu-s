'use server';

/**
 * @fileOverview Flow to generate relevant images for quiz questions using Gemini 2.0 Flash.
 *
 * - generateQuizImages - A function that generates images for quiz questions.
 * - GenerateQuizImagesInput - The input type for the generateQuizImages function.
 * - GenerateQuizImagesOutput - The return type for the generateQuizImages function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateQuizImagesInputSchema = z.object({
  question: z.string().describe('The quiz question to generate an image for.'),
});
export type GenerateQuizImagesInput = z.infer<typeof GenerateQuizImagesInputSchema>;

const GenerateQuizImagesOutputSchema = z.object({
  imageUrl: z.string().describe('The data URI of the generated image.'),
});
export type GenerateQuizImagesOutput = z.infer<typeof GenerateQuizImagesOutputSchema>;

export async function generateQuizImages(input: GenerateQuizImagesInput): Promise<GenerateQuizImagesOutput> {
  return generateQuizImagesFlow(input);
}

const generateQuizImagesFlow = ai.defineFlow(
  {
    name: 'generateQuizImagesFlow',
    inputSchema: GenerateQuizImagesInputSchema,
    outputSchema: GenerateQuizImagesOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      // IMPORTANT: ONLY the googleai/gemini-2.0-flash-preview-image-generation model is able to generate images.
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `Generate an image related to the following quiz question: ${input.question}`,
      config: {
        responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
      },
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate image.');
    }

    return {imageUrl: media.url};
  }
);
