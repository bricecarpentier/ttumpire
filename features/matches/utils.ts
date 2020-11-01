import { MatchRule } from '../../scenes/types/rule';
import { MatchPlayer } from './types';

type GameCount = {
  player1: number;
  player2: number;
};

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

const strategies = {
  bestOf: computeBestOfWinner,
  firstAt: computeFirstAtWinner,
};

export const computeMatchWinner = (
  rule: MatchRule,
  gameWinners: MatchPlayer[],
): MatchPlayer | null => {
  const { value, strategy } = rule;
  const count = gameWinners.reduce(
    (acc: GameCount, next: MatchPlayer): GameCount => ({
      ...acc,
      [next]: acc[next] + 1,
    }),
    { player1: 0, player2: 0 },
  );
  return strategies[strategy](value, count);
};
