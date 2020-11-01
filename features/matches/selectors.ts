import { Match, MatchState, GameCount } from './types';
import { computeMatchWinner } from './utils';

type PartialRootState = { matches: MatchState };

export const selectMatches = (state: PartialRootState) => state.matches;
export const selectMatch = (matches: MatchState, matchId: string) =>
  matches[matchId];

export const selectGames = (match: Match) => match.games;

export const selectMatchWinner = (match: Match, count: GameCount) =>
  computeMatchWinner(match.rule.match, count);
