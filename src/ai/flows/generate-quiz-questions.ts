'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating quiz questions about Vietnamese provinces.
 *
 * The flow uses Gemini 2.5 Pro to generate diverse and challenging quiz questions about each province.
 * It includes questions about local knowledge, history, culture, and geography.
 *
 * - generateQuizQuestions - A function that generates quiz questions for a given province.
 * - GenerateQuizQuestionsInput - The input type for the generateQuizQuestions function.
 * - GenerateQuizQuestionsOutput - The return type for the generateQuizQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateQuizQuestionsInputSchema = z.object({
  provinceName: z.string().describe('The name of the Vietnamese province to generate quiz questions for.'),
  numberOfQuestions: z.number().default(5).describe('The number of quiz questions to generate.'),
});
export type GenerateQuizQuestionsInput = z.infer<typeof GenerateQuizQuestionsInputSchema>;

const QuizQuestionSchema = z.object({
  question: z.string().describe('The quiz question.'),
  options: z.array(z.string()).describe('The possible answer options for the question.'),
  correctAnswer: z.string().describe('The correct answer to the question.'),
});

const GenerateQuizQuestionsOutputSchema = z.object({
  questions: z.array(QuizQuestionSchema).describe('The generated quiz questions for the province.'),
});
export type GenerateQuizQuestionsOutput = z.infer<typeof GenerateQuizQuestionsOutputSchema>;

export async function generateQuizQuestions(input: GenerateQuizQuestionsInput): Promise<GenerateQuizQuestionsOutput> {
  return generateQuizQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateQuizQuestionsPrompt',
  input: {schema: GenerateQuizQuestionsInputSchema},
  output: {schema: GenerateQuizQuestionsOutputSchema},
  prompt: `You are an expert quiz question generator specializing in Vietnamese provinces.

  Generate {{numberOfQuestions}} quiz questions about the province of {{provinceName}}.
  The quiz questions should cover a range of topics, including local knowledge, history, culture, and geography.

  Each question should have 4 answer options, and one correct answer.

  The output should be a JSON object with a 'questions' array. Each object in the array should follow this schema:
  \n${JSON.stringify(QuizQuestionSchema.describe('QuizQuestion'))}
  \nExample:\n{
    "questions": [
      {
        "question": "What is the capital of Vietnam?",
        "options": ["Hanoi", "Ho Chi Minh City", "Da Nang", "Can Tho"],
        "correctAnswer": "Hanoi"
      }
    ]
  }
  \nMake sure to include different types of questions, such as:
  * Knowledge-based questions (e.g., "What is the capital of [Province]?")
  * Image-based questions (e.g., "Which of the following images shows a famous landmark in [Province]?")
  * Audio-based questions (e.g., "Which of the following songs is a traditional folk song from [Province]?")
  * Questions about local language/dialects (e.g., "What does the word '[local word]' mean in the [Province] dialect?")`,
});

const generateQuizQuestionsFlow = ai.defineFlow(
  {
    name: 'generateQuizQuestionsFlow',
    inputSchema: GenerateQuizQuestionsInputSchema,
    outputSchema: GenerateQuizQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
