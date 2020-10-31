import { GamePlayer } from './types';

export const isGameFinished = (score1: number, score2: number): boolean => {
  if (score1 < 11 && score2 < 11) {
    return false;
  }
  return Math.abs(score1 - score2) >= 2;
};

const playerToIndex = (player: GamePlayer) => (player === 'player1' ? 0 : 1);
const indexToPlayer = (idx: number): GamePlayer =>
  idx % 2 === 1 ? 'player2' : 'player1';

export const computeCurrentPlayer = (
  firstPlayer: GamePlayer,
  score1: number,
  score2: number,
): GamePlayer => {
  const idx = playerToIndex(firstPlayer);
  const totalScore = score1 + score2;
  // 2 serve each until 10-10 then 1 serve each
  const isFirst =
    totalScore < 20 ? [0, 1].includes(totalScore % 4) : totalScore % 2 === 0;
  const indexOfNext = isFirst ? idx : idx + 1;
  return indexToPlayer(indexOfNext);
};
