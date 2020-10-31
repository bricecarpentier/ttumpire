import { GameRule, Rule } from './scenes/types/rule';

const OldGameRule: GameRule = {
  firstAt: 21,
  minimumGap: 2,
  serveCount: 5,
};

const NewGameRule: GameRule = {
  firstAt: 11,
  minimumGap: 2,
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
