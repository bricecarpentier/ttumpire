import { GameRule } from '../../scenes/types/rule';
import { GamePlayer } from './types';

export const isGameFinished = (
  rule: GameRule,
  score1: number,
  score2: number,
): boolean => {
  const { firstAt } = rule;
  if (score1 < firstAt && score2 < firstAt) {
    return false;
  }
  if (!rule.with2PointsGap) {
    return true;
  }
  return Math.abs(score1 - score2) >= 2;
};

const playerToIndex = (player: GamePlayer) => (player === 'player1' ? 0 : 1);
const indexToPlayer = (idx: number): GamePlayer =>
  idx % 2 === 1 ? 'player2' : 'player1';

const range = (max: number) =>
  new Array(max).fill(0).map((v, idx: number) => idx);

export const computeCurrentPlayer = (
  rule: GameRule,
  firstPlayer: GamePlayer,
  score1: number,
  score2: number,
): GamePlayer => {
  const maxBeforeGap = 2 * (rule.firstAt - 1);
  const idx = playerToIndex(firstPlayer);
  const totalScore = score1 + score2;
  // 2 serve each until 10-10 then 1 serve each
  const isFirst =
    totalScore < maxBeforeGap
      ? range(rule.serveCount).includes(totalScore % (rule.serveCount * 2))
      : totalScore % 2 === 0;
  const indexOfNext = isFirst ? idx : idx + 1;
  return indexToPlayer(indexOfNext);
};

export const computeGameWinner = (
  rule: GameRule,
  score1: number,
  score2: number,
): GamePlayer | null => {
  const finished = isGameFinished(rule, score1, score2);
  if (!finished) {
    return null;
  }
  return score1 > score2 ? 'player1' : 'player2';
};

export const isGameSecondHalf = (
  rule: GameRule,
  score1: number,
  score2: number,
) => {
  const threshold = Math.floor(rule.firstAt / 2);
  return score1 >= threshold || score2 >= threshold;
};
