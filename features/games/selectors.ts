import { Game, GameState } from './types';
import { computeCurrentPlayer, isGameFinished } from './utils';

type PartialRootState = { games: GameState };

export const selectGames = (state: PartialRootState) => state.games;
export const selectGame = (games: GameState, gameId: string) => games[gameId];

export const selectIsGameFinished = (game: Game) =>
  isGameFinished(game.rule, game.player1Score, game.player2Score);

export const selectCurrentPlayer = (game: Game) =>
  computeCurrentPlayer(
    game.rule,
    game.firstPlayer,
    game.player1Score,
    game.player2Score,
  );
