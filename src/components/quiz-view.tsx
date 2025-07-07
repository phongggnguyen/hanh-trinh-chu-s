"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { getQuizForProvince } from '@/actions/quiz.actions';
import type { Province, QuizQuestion } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, AlertCircle, Clock, Bomb, X } from 'lucide-react';
import { QuizCompletionModal } from './quiz-completion-modal';

interface QuizViewProps {
  province: Province;
  onComplete: (province: Province, success: boolean) => void;
  onExit: () => void;
}

const QUIZ_TIME_LIMIT = 30; // seconds per question
const REQUIRED_SCORE = 4;

export function QuizView({ province, onComplete, onExit }: QuizViewProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME_LIMIT);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getQuizForProvince(province.name)
      .then(setQuestions)
      .catch((e) => setError(e.message || 'Lỗi không xác định'))
      .finally(() => setLoading(false));
  }, [province]);

  const handleNextQuestion = useCallback(() => {
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setTimeLeft(QUIZ_TIME_LIMIT);
    } else {
      setIsQuizFinished(true);
      setShowCompletionModal(true);
    }
  }, [currentQuestionIndex, questions.length]);

  useEffect(() => {
    if (loading || isQuizFinished || selectedAnswer) return;

    if (timeLeft === 0) {
      handleNextQuestion();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, loading, isQuizFinished, handleNextQuestion, selectedAnswer]);

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      handleNextQuestion();
    }, 1500); // Wait 1.5s before next question
  };

  const getButtonClass = (option: string) => {
    if (!selectedAnswer) {
      return 'bg-white hover:bg-amber-100/50 text-slate-700 border-slate-200';
    }
    if (option === currentQuestion.correctAnswer) {
      return 'bg-green-500 text-white border-green-600 ring-4 ring-green-500/50';
    }
    if (option === selectedAnswer) {
      return 'bg-red-500 text-white border-red-600';
    }
    return 'bg-slate-100 text-slate-500 border-slate-200 opacity-60';
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <Loader2 className="w-16 h-16 animate-spin text-primary" />
        <p className="text-xl">Đang tạo câu hỏi cho {province.name}...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
         <Alert variant="destructive" className="max-w-lg">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Không thể tạo câu đố!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <Button onClick={onExit}>Quay lại bản đồ</Button>
      </div>
    );
  }
  
  if (questions.length === 0) return null;

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <>
      <div className="relative flex flex-col h-full p-4 md:p-8 bg-gray-100 rounded-lg animate-fade-in">
        <Button onClick={onExit} variant="ghost" size="icon" className="absolute top-4 right-4 z-10">
          <X className="w-6 h-6" />
        </Button>
        <header className="mb-4">
          <div className="flex justify-between items-center text-lg md:text-xl font-bold mb-2">
            <h2 className="text-primary">KHÁM PHÁ: {province.name.toUpperCase()}</h2>
            <span>Câu {currentQuestionIndex + 1}/{questions.length}</span>
          </div>
          <Progress value={progress} className="h-3" />
        </header>
        
        <main className="flex-grow flex flex-col justify-center">
          <Card className="w-full max-w-4xl mx-auto shadow-lg">
            <CardHeader className="text-center">
              {currentQuestion.imageUrl && (
                <div className="relative w-full h-48 md:h-64 mb-4 rounded-t-lg overflow-hidden">
                   <Image 
                     src={currentQuestion.imageUrl} 
                     alt={`Câu hỏi về ${province.name}`}
                     data-ai-hint="vietnam landscape"
                     layout="fill"
                     objectFit="cover"
                   />
                </div>
              )}
              <CardTitle className="text-xl md:text-2xl px-4">{currentQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={!!selectedAnswer}
                    className={`h-auto p-4 text-lg rounded-lg transition-all duration-300 justify-start text-left shadow-sm border-2 ${getButtonClass(option)}`}
                  >
                    <span className="font-bold mr-3">{String.fromCharCode(65 + index)}.</span>
                    <span className="flex-1 whitespace-normal">{option}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
        
        <footer className="mt-4 flex justify-between items-center">
          <div className="flex gap-2">
            <Button variant="outline" className="bg-white/80" disabled><Bomb className="mr-2"/> 50/50</Button>
            <Button variant="outline" className="bg-white/80" disabled><Clock className="mr-2"/> +15 giây</Button>
          </div>
          <div className="text-2xl font-bold bg-white/80 px-4 py-2 rounded-full shadow-md w-20 h-20 flex items-center justify-center border-4 border-primary">
            {timeLeft}
          </div>
        </footer>
      </div>
      {showCompletionModal && (
        <QuizCompletionModal
          isOpen={showCompletionModal}
          onClose={() => {
            setShowCompletionModal(false);
            onComplete(province, score >= REQUIRED_SCORE);
          }}
          provinceName={province.name}
          isSuccess={score >= REQUIRED_SCORE}
          score={score}
          totalQuestions={questions.length}
        />
      )}
    </>
  );
}
