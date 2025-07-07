"use server";

import { generateQuizQuestions } from "@/ai/flows/generate-quiz-questions";
import { generateQuizImages } from "@/ai/flows/generate-quiz-images";
import type { QuizQuestion } from "@/lib/types";

export async function getQuizForProvince(provinceName: string): Promise<QuizQuestion[]> {
  try {
    const { questions } = await generateQuizQuestions({ provinceName, numberOfQuestions: 5 });

    if (!questions || questions.length === 0) {
      throw new Error("No questions generated.");
    }
    
    const questionsWithImages = await Promise.all(
        questions.map(async (q) => {
            try {
                const imageResult = await generateQuizImages({ question: q.question });
                return {
                    ...q,
                    imageUrl: imageResult.imageUrl,
                };
            } catch (imageError) {
                console.error(`Failed to generate image for question: "${q.question}"`, imageError);
                // Return question without image if image generation fails
                return { ...q, imageUrl: "" };
            }
        })
    );

    return questionsWithImages;

  } catch (error) {
    console.error(`Failed to get quiz for province ${provinceName}:`, error);
    // As a fallback, you could return a static set of questions or an empty array
    throw new Error(`Could not generate a quiz for ${provinceName}. Please try another province.`);
  }
}
