import { GameRule, MatchRule, Rule } from './scenes/types/rule';

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

const OneSetShowdownRule: MatchRule = {
  strategy: 'firstAt',
  value: 1,
  secondsBetweenGames: 60,
};

const AmateurRule: MatchRule = {
  strategy: 'bestOf',
  value: 5,
  secondsBetweenGames: 60,
};

const ProRule: MatchRule = {
  strategy: 'bestOf',
  value: 7,
  secondsBetweenGames: 60,
};

export const OldRulesOneSetShowdown: Rule = {
  name: 'Old rules - One set showdown',
  game: OldGameRule,
  match: OneSetShowdownRule,
};

export const OldRulesAmateur: Rule = {
  name: 'Old rules - Amateur level',
  game: OldGameRule,
  match: AmateurRule,
};

export const OldRulesPro: Rule = {
  name: 'Old rules - Pro level',
  game: OldGameRule,
  match: ProRule,
};

export const NewRuleOneSetShowdown: Rule = {
  name: 'New rules - One set showdown',
  game: NewGameRule,
  match: OneSetShowdownRule,
};

export const NewRulesAmateur: Rule = {
  name: 'New rules - Amateur level',
  game: NewGameRule,
  match: AmateurRule,
};

export const NewRulesPro: Rule = {
  name: 'New rules - Pro level',
  game: NewGameRule,
  match: ProRule,
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
