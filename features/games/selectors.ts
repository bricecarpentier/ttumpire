import { createSelector } from '@reduxjs/toolkit';
import { GameState } from './types';
import { computeCurrentPlayer, isGameFinished } from './utils';

const selectGames = (state: { games: GameState }): GameState => state.games;
const selectGameId = (state: unknown, gameId: string) => gameId;

export const selectGame = createSelector(
  selectGames,
  selectGameId,
  (games, gameId) => games[gameId],
);

export const selectIsGameFinished = createSelector(selectGame, (game) =>
  isGameFinished(game.player1Score, game.player2Score),
);

export const selectCurrentPlayer = createSelector(selectGame, (game) =>
  computeCurrentPlayer(game.firstPlayer, game.player1Score, game.player2Score),
);
