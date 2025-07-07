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
  All questions, options, and the correct answer MUST be in Vietnamese.

  The quiz questions should cover a range of topics, including local knowledge, history, culture, and geography.

  Each question should have 4 answer options, and one correct answer.

  The output should be a JSON object with a 'questions' array. Each object in the array should follow this schema:
  \n${JSON.stringify(QuizQuestionSchema.describe('QuizQuestion'))}
  \nExample:\n{
    "questions": [
      {
        "question": "Đâu là thủ đô của Việt Nam?",
        "options": ["Hà Nội", "Thành phố Hồ Chí Minh", "Đà Nẵng", "Cần Thơ"],
        "correctAnswer": "Hà Nội"
      }
    ]
  }
  \nMake sure to include different types of questions, such as:
  * Knowledge-based questions (e.g., "Đâu là thủ phủ của tỉnh [Tên Tỉnh]?")
  * Image-based questions (e.g., "Hình ảnh nào sau đây cho thấy một địa danh nổi tiếng ở [Tên Tỉnh]?")
  * Audio-based questions (e.g., "Bài hát nào sau đây là một bài hát dân ca truyền thống của [Tên Tỉnh]?")
  * Questions about local language/dialects (e.g., "Từ '[từ địa phương]' có nghĩa là gì trong phương ngữ [Tên Tỉnh]?")`,
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
