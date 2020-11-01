import { GamePlayer } from '../games/types';
import { Match, MatchState } from './types';
import { computeMatchWinner } from './utils';

type PartialRootState = { matches: MatchState };

export const selectMatches = (state: PartialRootState) => state.matches;
export const selectMatch = (matches: MatchState, matchId: string) =>
  matches[matchId];

export const selectGames = (match: Match) => match.games;

export const selectMatchWinner = (match: Match, gameWinners: GamePlayer[]) =>
  computeMatchWinner(match.rule.match, gameWinners);
