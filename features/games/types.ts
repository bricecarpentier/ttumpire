export type GamePlayer = 'player1' | 'player2';

export type Game = {
  id: string;
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
