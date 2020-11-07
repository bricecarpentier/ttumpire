import { GameState } from './types';

type PartialRootState = { games: GameState };

export const selectGames = (state: PartialRootState) => state.games;
export const selectGame = (games: GameState, gameId: string) => games[gameId];
