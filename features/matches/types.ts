import { Rule } from '../../scenes/types/rule';

export type MatchPlayer = 'player1' | 'player2';

export type Match = {
  id: string;
  rule: Rule;
  games: string[];
};

export type MatchState = {
  [id: string]: Match;
};

export type MatchCreatedPayload = {
  matchId: string;
};

export type RuleChangedPayload = {
  matchId: string;
  rule: Rule;
};

export type GameAddedPayload = {
  matchId: string;
  gameId: string;
};
