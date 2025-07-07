"use client";

import React, { createContext, useContext, useReducer, type Dispatch, useEffect, useState } from 'react';
import { PROVINCES, findProvinceById } from '@/lib/provinces';
import type { GameState, GameAction, Province } from '@/lib/types';

const initialState: GameState = {
  unlocked: new Set(['ha-noi', 'ho-chi-minh', 'da-nang']), // Start with 3 major cities
  conquered: new Set(),
};

const GameContext = createContext<{
  state: GameState;
  dispatch: Dispatch<GameAction>;
} | null>(null);

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'CONQUER_PROVINCE': {
      const { provinceId, neighbors } = action.payload;
      const newConquered = new Set(state.conquered).add(provinceId);
      const newUnlocked = new Set(state.unlocked);
      neighbors.forEach(neighborId => {
        if (!newConquered.has(neighborId)) {
          newUnlocked.add(neighborId);
        }
      });
      return {
        ...state,
        conquered: newConquered,
        unlocked: newUnlocked,
      };
    }
    default:
      return state;
  }
}

const LOCAL_STORAGE_KEY = 'vietnamQuestGameState';

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  const [state, dispatch] = useReducer(gameReducer, initialState, (initial) => {
    if (typeof window === 'undefined') {
      return initial;
    }
    try {
      const savedState = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedState) {
        const parsed = JSON.parse(savedState);
        return {
          unlocked: new Set(parsed.unlocked),
          conquered: new Set(parsed.conquered),
        };
      }
    } catch (error) {
      console.error("Failed to parse saved game state:", error);
    }
    return initial;
  });

  useEffect(() => {
    if (isInitialized) {
      const savedState = {
        unlocked: Array.from(state.unlocked),
        conquered: Array.from(state.conquered),
      };
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedState));
    } else {
        setIsInitialized(true);
    }
  }, [state, isInitialized]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
