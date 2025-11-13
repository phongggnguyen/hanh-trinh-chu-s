'use server';

/**
 * @fileOverview Flow to generate relevant images for quiz questions using Gemini 2.0 Flash.
 *
 * - generateQuizImages - A function that generates images for quiz questions.
 * - GenerateQuizImagesInput - The input type for the generateQuizImages function.
 * - GenerateQuizImagesOutput - The return type for the generateQuizImages function.
 */

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {z} from 'genkit';

// Create separate AI instance for image generation with dedicated API key
const imageAI = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_GENAI_IMAGE_API_KEY || process.env.GOOGLE_GENAI_API_KEY,
    })
  ],
});

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

const generateQuizImagesFlow = imageAI.defineFlow(
  {
    name: 'generateQuizImagesFlow',
    inputSchema: GenerateQuizImagesInputSchema,
    outputSchema: GenerateQuizImagesOutputSchema,
  },
  async input => {
    try {
      console.log(`🎨 Generating image for question: "${input.question}"`);

      const {media} = await imageAI.generate({
        // Using Gemini 2.5 Flash Image model for image generation
        model: 'googleai/gemini-2.5-flash-image',
        prompt: `Generate a photorealistic and culturally relevant image for the following Vietnamese quiz question: "${input.question}".
        The image should be vibrant, high-quality, and appropriate for educational content about Vietnam.`,
        config: {
          responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
        },
      });

      if (!media || !media.url) {
        console.error('❌ No media returned from image generation');
        throw new Error('Failed to generate image - no media returned.');
      }

      console.log(`✅ Image generated successfully: ${media.url.substring(0, 100)}...`);
      return {imageUrl: media.url};

    } catch (error) {
      console.error('❌ Error in image generation flow:', error);
      throw error;
    }
  }
);
