import { GameRule, MatchRule, Rule } from './types/rule';

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

const BestOf1: MatchRule = {
  strategy: 'firstAt',
  value: 1,
  secondsBetweenGames: 60,
};

const BestOf3: MatchRule = {
  strategy: 'bestOf',
  value: 3,
  secondsBetweenGames: 2,
};

const BestOf5: MatchRule = {
  strategy: 'bestOf',
  value: 5,
  secondsBetweenGames: 2,
};

const BestOf7: MatchRule = {
  strategy: 'bestOf',
  value: 7,
  secondsBetweenGames: 2,
};

export const OldRulesOneSetShowdown: Rule = {
  name: 'Old rules - One set showdown',
  game: OldGameRule,
  match: BestOf1,
};

export const OldRulesAmateur: Rule = {
  name: 'Old rules - Amateur level',
  game: OldGameRule,
  match: BestOf3,
};

export const OldRulesPro: Rule = {
  name: 'Old rules - Pro level',
  game: OldGameRule,
  match: BestOf5,
};

export const NewRuleOneSetShowdown: Rule = {
  name: 'New rules - One set showdown',
  game: NewGameRule,
  match: BestOf1,
};

export const NewRulesAmateur: Rule = {
  name: 'New rules - Amateur level',
  game: NewGameRule,
  match: BestOf5,
};

export const NewRulesPro: Rule = {
  name: 'New rules - Pro level',
  game: NewGameRule,
  match: BestOf7,
};

export const BriceAndElizabeth: Rule = {
  name: 'Brice & Elizabeth',
  game: NewGameRule,
  match: {
    strategy: 'firstAt',
    value: 15,
    secondsBetweenGames: 2,
  },
};
