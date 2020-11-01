import { Rule } from '../../scenes/types/rule';
import { GameNotFoundInMatchError } from './errors';
import { Match } from './types';
import { gameIsSwitch, gameIsDecider } from './utils';

describe('gameIsSwitch', () => {
  describe('given a game not found in the match', () => {
    it('throws GameNotFoundInMatch', () => {
      const match = {
        id: 'match1',
        startSwitch: true,
        games: ['game1'],
      } as Match;
      const gameId = 'game2';

      expect.assertions(2);
      try {
        gameIsSwitch(match, gameId);
      } catch (error) {
        expect(error).toBeInstanceOf(GameNotFoundInMatchError);
        expect(error.meta).toEqual({ matchId: 'match1', gameId: 'game2' });
      }
    });
  });

  describe('given the first game of a match, returns the value of startSwitch', () => {
    it('returns true if startSwitch is true', () => {
      const match = {
        startSwitch: true,
        games: ['game1'],
      } as Match;
      const gameId = 'game1';
      expect(gameIsSwitch(match, gameId)).toBe(true);
    });

    it('returns false if startSwitch is false', () => {
      const match = {
        startSwitch: false,
        games: ['game1'],
      } as Match;
      const gameId = 'game1';
      expect(gameIsSwitch(match, gameId)).toBe(false);
    });
  });

  describe('given any other game of a match', () => {
    it('returns false if startSwitch is true and the game index (1-indexed) is even', () => {
      const match = {
        startSwitch: true,
        games: ['game1', 'game2', 'game3', 'game4'],
      } as Match;
      const gameId = 'game2';
      expect(gameIsSwitch(match, gameId)).toBe(false);
    });

    it('returns true if startSwitch is true and the game index (1-indexed) is odd', () => {
      const match = {
        games: ['game1', 'game2', 'game3', 'game4'],
      } as Match;
      const gameId = 'game3';
      expect(gameIsSwitch(match, gameId)).toBe(false);
    });

    it('returns true if startSwitch is false and the game index (1-indexed) is even', () => {
      const match = {
        startSwitch: false,
        games: ['game1', 'game2', 'game3', 'game4'],
      } as Match;
      const gameId = 'game2';
      expect(gameIsSwitch(match, gameId)).toBe(true);
    });

    it('returns false if startSwitch is false and the game index (1-indexed) is odd', () => {
      const match = {
        games: ['game1', 'game2', 'game3', 'game4'],
      } as Match;
      const gameId = 'game3';
      expect(gameIsSwitch(match, gameId)).toBe(false);
    });
  });

  describe('given the last game of a match', () => {
    it('does not crash and returns correctly', () => {
      expect.assertions(1);
      const match = {
        startSwitch: false,
        games: ['game1', 'game2', 'game3', 'game4'],
      } as Match;
      const gameId = 'game4';
      expect(gameIsSwitch(match, gameId)).toBe(true);
    });
  });
});

describe('gameIsDecider', () => {
  describe('best of 5', () => {
    const match = {
      id: 'match1',
      rule: {
        match: {
          strategy: 'bestOf',
          value: 5,
        },
      } as Rule,
      games: ['game1', 'game2', 'game3', 'game4', 'game5'],
    } as Match;

    it.each(match.games.slice(0, -1))('%s is not decider', (gameId) => {
      expect(gameIsDecider(match, gameId)).toBe(false);
    });

    it('game5 is decider', () => {
      expect(gameIsDecider(match, 'game5')).toBe(true);
    });
  });

  describe('first at 5', () => {
    const match = {
      id: 'match1',
      rule: {
        match: {
          strategy: 'firstAt',
          value: 5,
        },
      } as Rule,
      games: ['game1', 'game2', 'game3', 'game4', 'game5'],
    } as Match;

    it.each(match.games)('%s is not decider', (gameId) => {
      expect(gameIsDecider(match, gameId)).toBe(false);
    });
  });
});
