import { PayloadAction } from '@reduxjs/toolkit';
import { GameAlreadyExistsError, GameNotFoundError } from './errors';
import { GameCreatedPayload, GameState, PointScoredPayload } from './types';

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

export const gameCreated = (
  state: GameState,
  action: PayloadAction<GameCreatedPayload>,
) => {
  const { gameId, firstPlayer, rule } = action.payload;
  if (state[gameId]) {
    throw new GameAlreadyExistsError(gameId);
  }
  state[gameId] = {
    id: gameId,
    rule,
    firstPlayer,
    player1Score: 0,
    player2Score: 0,
  };
};
