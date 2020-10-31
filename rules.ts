import { GameRule, Rule } from './scenes/types/rule';

const OldGameRule: GameRule = {
  firstAt: 21,
  with2PointsGap: true,
  serveCount: 5,
};

const NewGameRule: GameRule = {
  firstAt: 11,
  with2PointsGap: true,
  serveCount: 2,
};

export const OldRulesAmateur: Rule = {
  name: 'Old rules - Amateur level',
  game: OldGameRule,
};

export const NewRulesAmateur: Rule = {
  name: 'New rules - Amateur level',
  game: NewGameRule,
};
