import { PayloadAction } from '@reduxjs/toolkit';
import { GameNotFoundError } from './errors';
import { GameState, PointScoredPayload } from './types';

export const pointScored = (
  state: GameState,
  action: PayloadAction<PointScoredPayload>,
) => {
  const { gameId, player } = action.payload;
  const game = state[gameId];
  if (!game) {
    throw new GameNotFoundError(gameId);
  }
  const scoreProp = player === 'player1' ? 'player1Score' : 'player2Score';
  game[scoreProp] = game[scoreProp] + 1;
};
