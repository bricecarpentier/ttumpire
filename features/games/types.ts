import { GameRule } from '../../scenes/types/rule';

export type GamePlayer = 'player1' | 'player2';

export type Game = {
  id: string;
  rule: GameRule;
  firstPlayer: GamePlayer;
  currentPlayer: GamePlayer;
  player1Score: number;
  player2Score: number;
  winner?: GamePlayer;
  secondHalf: boolean;
};

export type GameState = {
  [id: string]: Game;
};

export type PointScoredPayload = {
  gameId: string;
  player: GamePlayer;
};

export type GameCreatedPayload = {
  gameId: string;
  rule: GameRule;
  firstPlayer: GamePlayer;
};
