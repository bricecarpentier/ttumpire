import { createSelector } from '@reduxjs/toolkit';

import { selectors as gameSelectors } from '@tt:features/games';
import { GamePlayer } from '@tt:features/games/types';
import {
  selectors as matchSelectors,
  utils as matchUtils,
} from '@tt:features/matches';

const selectGame = createSelector(
  gameSelectors.selectGames,
  (state: unknown, { gameId }: { gameId: string }) => gameId,
  gameSelectors.selectGame,
);

const selectMatch = createSelector(
  matchSelectors.selectMatches,
  (state: unknown, { matchId }: { matchId: string }) => matchId,
  matchSelectors.selectMatch,
);

const selectGameCount = createSelector(
  selectMatch,
  gameSelectors.selectGames,
  (match, allGames) => {
    const { games: gameIds } = match;
    const games = gameIds.map((id) => gameSelectors.selectGame(allGames, id));
    const gameWinners = games.map((g) => g.winner).filter(Boolean);
    return matchUtils.computeGameCount(gameWinners as GamePlayer[]);
  },
);

const selectShouldSwitch = createSelector(
  selectMatch,
  selectGame,
  (match, game) => {
    const gameIsSwitch = matchUtils.gameIsSwitch(match, game.id);
    const gameIsDecider = matchUtils.gameIsDecider(match, game.id);
    const gameIsSecondHalf = game.secondHalf;
    // eslint-disable-next-line no-bitwise
    return !!(Number(gameIsSwitch) ^ Number(gameIsDecider && gameIsSecondHalf));
  },
);

const selectMatchWinner = createSelector(
  selectMatch,
  selectGameCount,
  (match, count) => {
    return matchSelectors.selectMatchWinner(match, count);
  },
);

export default createSelector(
  selectMatch,
  selectGame,
  selectShouldSwitch,
  selectGameCount,
  selectMatchWinner,
  (match, game, shouldSwitch, gameCount, matchWinner) => ({
    match,
    game,
    currentPlayer: game.currentPlayer,
    gameFinished: !!game.winner,
    shouldSwitch,
    gameCount,
    matchWinner,
  }),
);
