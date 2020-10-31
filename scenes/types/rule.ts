export type GameRule = {
  firstAt: number;
  minimumGap: number;
  serveCount: number;
};

export type Rule = {
  name: string;
  game: GameRule;
};
