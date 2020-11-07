export type GameRule = {
  firstAt: number;
  with2PointsGap: true;
  serveCount: number;
};

export type MatchRule = {
  strategy: 'bestOf' | 'firstAt';
  value: number;
  secondsBetweenGames: number;
};

export type Rule = {
  name: string;
  game: GameRule;
  match: MatchRule;
};
