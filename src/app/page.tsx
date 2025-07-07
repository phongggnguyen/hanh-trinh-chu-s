import { GameBoard } from '@/components/game-board';
import { GameProvider } from '@/contexts/game-context';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background">
      <GameProvider>
        <GameBoard />
      </GameProvider>
    </main>
  );
}
