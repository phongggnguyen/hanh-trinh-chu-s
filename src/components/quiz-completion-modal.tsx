"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Award } from 'lucide-react';

interface QuizCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  provinceName: string;
  isSuccess: boolean;
  score: number;
  totalQuestions: number;
}

export function QuizCompletionModal({ isOpen, onClose, provinceName, isSuccess, score, totalQuestions }: QuizCompletionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] text-center p-8">
        <DialogHeader>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full mb-4 animate-bounce">
            {isSuccess ? 
              <CheckCircle2 className="h-full w-full text-green-500" /> : 
              <XCircle className="h-full w-full text-red-500" />
            }
          </div>
          <DialogTitle className="text-2xl font-bold">
            {isSuccess ? 'Chúc Mừng!' : 'Thử Lại Nhé!'}
          </DialogTitle>
          <DialogDescription className="text-md mt-2">
            {isSuccess ? `Bạn đã chinh phục thành công tỉnh ${provinceName}!` : `Bạn chưa chinh phục được tỉnh ${provinceName}.`}
            <br/>
            Kết quả của bạn: <strong className="text-primary">{score}/{totalQuestions}</strong>
          </DialogDescription>
        </DialogHeader>
        {isSuccess && (
          <div className="my-6 flex flex-col items-center justify-center animate-fade-in-up">
            <p className="mb-2 font-semibold">Bạn nhận được tem du lịch:</p>
            <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="absolute -top-2 -left-2 w-36 h-36 text-accent opacity-30 animate-spin-slow">
                    <path d="M50,2.5A47.5,47.5,0,1,1,2.5,50,47.5,47.5,0,0,1,50,2.5 M50,0A50,50,0,1,0,100,50,50,50,0,0,0,50,0Z" fill="currentColor"/>
                </svg>
                <div className="bg-primary text-primary-foreground p-4 rounded-lg shadow-2xl flex flex-col items-center justify-center w-full h-full transform transition-transform duration-500 hover:scale-110">
                    <Award className="w-10 h-10 mb-1 text-accent"/>
                    <span className="font-bold text-center leading-tight text-sm">{provinceName}</span>
                </div>
            </div>
          </div>
        )}
        <DialogFooter className="mt-6 sm:justify-center">
          <Button onClick={onClose} size="lg" className="bg-primary hover:bg-primary/90">
            Tiếp Tục Hành Trình
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
