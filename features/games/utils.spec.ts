import { GameRule } from '../../scenes/types/rule';
import { isGameSecondHalf } from './utils';

describe('isGameSecondHalf', () => {
  describe('in 11', () => {
    const gameRule = { firstAt: 11 } as GameRule;

    const cases: [number, number, boolean][] = [
      [0, 0, false],
      [0, 1, false],
      [1, 0, false],
      [4, 0, false],
      [0, 4, false],
      [4, 4, false],
      [5, 0, true],
      [0, 5, true],
      [5, 2, true],
      [5, 3, true],
      [5, 4, true],
      [5, 5, true],
      [5, 6, true],
      [7, 8, true],
      [11, 9, true],
      [9, 11, true],
      [10, 12, true],
      [12, 10, true],
    ];

    it.each(cases)('%s - %s', (player1, player2, expected) => {
      expect(isGameSecondHalf(gameRule, player1, player2)).toBe(expected);
    });
  });

  describe('in 21', () => {
    const gameRule = { firstAt: 21 } as GameRule;

    const cases: [number, number, boolean][] = [
      [0, 0, false],
      [0, 1, false],
      [1, 0, false],
      [4, 0, false],
      [0, 9, false],
      [9, 9, false],
      [10, 0, true],
      [0, 10, true],
      [10, 2, true],
      [10, 3, true],
      [10, 4, true],
      [10, 10, true],
      [10, 6, true],
      [17, 18, true],
      [19, 21, true],
      [19, 21, true],
      [20, 22, true],
      [22, 20, true],
    ];

    it.each(cases)('%s - %s', (player1, player2, expected) => {
      expect(isGameSecondHalf(gameRule, player1, player2)).toBe(expected);
    });
  });
});
