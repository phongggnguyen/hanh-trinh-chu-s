export interface Province {
  id: string;
  name: string;
  path: string;
  neighbors: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  imageUrl?: string;
}

export interface GameState {
  unlocked: Set<string>;
  conquered: Set<string>;
}

export type GameAction = {
  type: 'CONQUER_PROVINCE';
  payload: {
    provinceId: string;
    neighbors: string[];
  };
};
