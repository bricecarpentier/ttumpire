import { Rule } from '@tt:types/rule';

export type MatchPlayer = 'player1' | 'player2';

export type Match = {
  id: string;
  rule: Rule;
  games: string[];
  startSwitch: boolean;
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

export type GameCount = {
  player1: number;
  player2: number;
};
