import { GameRule } from '../../scenes/types/rule';

export type GamePlayer = 'player1' | 'player2';

export type Game = {
  id: string;
  rule: GameRule;
  firstPlayer: GamePlayer;
  player1Score: number;
  player2Score: number;
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
  firstPlayer: GamePlayer;
};

export type RuleChangedPayload = {
  gameId: string;
  rule: GameRule;
};
