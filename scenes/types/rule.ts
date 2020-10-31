export type GameRule = {
  firstAt: number;
  with2PointsGap: true;
  serveCount: number;
};

export type Rule = {
  name: string;
  game: GameRule;
};
