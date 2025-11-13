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

    // LOG: Hiển thị câu hỏi và đáp án để kiểm tra
    console.log('\n========================================');
    console.log(`📍 TỈNH: ${provinceName}`);
    console.log('========================================');
    questions.forEach((q, index) => {
      console.log(`\n❓ Câu ${index + 1}: ${q.question}`);
      console.log(`   Đáp án:`);
      q.options.forEach((opt, i) => {
        const isCorrect = opt === q.correctAnswer;
        console.log(`   ${isCorrect ? '✅' : '  '} ${String.fromCharCode(65 + i)}. ${opt}`);
      });
      console.log(`   ✔️ Đáp án đúng: ${q.correctAnswer}`);
    });
    console.log('========================================\n');

    // TEMPORARY: Disable image generation to save API quota
    // Uncomment below to enable image generation when quota is available
    const ENABLE_IMAGE_GENERATION = false; // Set to true when API quota is restored

    const questionsWithImages = ENABLE_IMAGE_GENERATION
      ? await Promise.all(
          questions.map(async (q) => {
            try {
              const imageResult = await generateQuizImages({ question: q.question });
              return {
                ...q,
                imageUrl: imageResult.imageUrl,
              };
            } catch (imageError) {
              console.error(`Failed to generate image for question: "${q.question}"`, imageError);
              return { ...q, imageUrl: "" };
            }
          })
        )
      : questions.map(q => ({ ...q, imageUrl: "" })); // No images - save quota

    return questionsWithImages;

  } catch (error) {
    console.error(`Failed to get quiz for province ${provinceName}:`, error);
    // As a fallback, you could return a static set of questions or an empty array
    throw new Error(`Could not generate a quiz for ${provinceName}. Please try another province.`);
  }
}
