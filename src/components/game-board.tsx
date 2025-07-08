"use client";

import { useState } from 'react';
import { useGame } from '@/contexts/game-context';
import type { Province } from '@/lib/types';
import { findProvinceById } from '@/lib/provinces';

import { VietnamMap } from './vietnam-map';
import { QuizView } from './quiz-view';
import { TravelJournal } from './travel-journal';
import { Button } from '@/components/ui/button';
import { BookOpen, Settings } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

export function GameBoard() {
  const { dispatch } = useGame();
  const [activeQuizProvince, setActiveQuizProvince] = useState<Province | null>(null);

  const handleProvinceSelect = (province: Province) => {
    setActiveQuizProvince(province);
  };

  const handleQuizComplete = (province: Province, success: boolean) => {
    if (success) {
      dispatch({
        type: 'CONQUER_PROVINCE',
        payload: { provinceId: province.id, neighbors: province.neighbors },
      });
    }
    setActiveQuizProvince(null);
  };
  
  const handleExitQuiz = () => {
    setActiveQuizProvince(null);
  }

  return (
    <ScrollArea className="relative w-full max-w-5xl h-[95vh] bg-white/50 shadow-2xl rounded-2xl border-4 border-white">
      <div className="p-4 md:p-6 flex flex-col font-headline min-h-[95vh]">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary">Hành Trình Chữ S</h1>
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="lg" className="bg-accent hover:bg-accent/90 border-2 border-accent-foreground/20">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Sổ Tay Du Lịch
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sổ Tay Du Lịch</SheetTitle>
                </SheetHeader>
                <TravelJournal />
              </SheetContent>
            </Sheet>
            <Button variant="ghost" size="icon">
              <Settings className="w-6 h-6" />
            </Button>
          </div>
        </header>

        <div className="flex-grow relative">
          {activeQuizProvince ? (
            <QuizView 
              province={activeQuizProvince} 
              onComplete={handleQuizComplete}
              onExit={handleExitQuiz} 
            />
          ) : (
            <VietnamMap onProvinceSelect={handleProvinceSelect} />
          )}
        </div>
      </div>
    </ScrollArea>
  );
}
