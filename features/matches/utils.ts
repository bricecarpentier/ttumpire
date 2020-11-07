import { MatchRule } from '@tt:types/rule';
import { GameNotFoundInMatchError } from './errors';
import { Match, MatchPlayer, GameCount } from './types';

export const computeGameCount = (gameWinners: MatchPlayer[]): GameCount =>
  gameWinners.reduce(
    (acc: GameCount, next: MatchPlayer): GameCount => ({
      ...acc,
      [next]: acc[next] + 1,
    }),
    { player1: 0, player2: 0 },
  );

const computeBestOfWinner = (
  value: number,
  count: GameCount,
): MatchPlayer | null => {
  const threshold = Math.ceil(value / 2);
  return computeFirstAtWinner(threshold, count);
};

const computeFirstAtWinner = (
  value: number,
  count: GameCount,
): MatchPlayer | null => {
  if (count.player1 === value) {
    return 'player1';
  }
  if (count.player2 === value) {
    return 'player2';
  }
  return null;
};

const winnerStrategies = {
  bestOf: computeBestOfWinner,
  firstAt: computeFirstAtWinner,
};

export const computeMatchWinner = (
  rule: MatchRule,
  count: GameCount,
): MatchPlayer | null => {
  const { value, strategy } = rule;
  return winnerStrategies[strategy](value, count);
};

export const gameIsSwitch = (match: Match, gameId: string) => {
  const { games, startSwitch } = match;
  const gameIndex = games.indexOf(gameId);
  if (gameIndex === -1) {
    throw new GameNotFoundInMatchError(match.id, gameId);
  }
  const gamesUpTo = games.slice(0, gameIndex);
  return gamesUpTo.reduce((acc) => !acc, startSwitch);
};

const deciderStrategies = {
  bestOf: (value: number, match: Match, gameId: string) => {
    const gameIndex = match.games.indexOf(gameId);
    if (gameIndex === -1) {
      throw new GameNotFoundInMatchError(match.id, gameId);
    }
    return gameIndex === value - 1;
  },
  firstAt: () => false,
};

export const gameIsDecider = (match: Match, gameId: string) => {
  const { strategy, value } = match.rule.match;
  return deciderStrategies[strategy](value, match, gameId);
};
