import { createSelector } from '@reduxjs/toolkit';
import { selectors as gameSelectors } from '../../features/games';
import { GamePlayer } from '../../features/games/types';
import {
  selectors as matchSelectors,
  utils as matchUtils,
} from '../../features/matches';

const selectGame = createSelector(
  gameSelectors.selectGames,
  (state: unknown, { gameId }: { gameId: string }) => gameId,
  gameSelectors.selectGame,
);

const selectCurrentPlayer = createSelector(
  selectGame,
  gameSelectors.selectCurrentPlayer,
);
const selectIsGameFinished = createSelector(
  selectGame,
  gameSelectors.selectIsGameFinished,
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
    const gameWinners = games
      .map((g) => gameSelectors.selectGameWinner(g))
      .filter(Boolean);
    return matchUtils.computeGameCount(gameWinners as GamePlayer[]);
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
  selectCurrentPlayer,
  selectIsGameFinished,
  selectGameCount,
  selectMatchWinner,
  (match, game, currentPlayer, gameFinished, gameCount, matchWinner) => ({
    match,
    game,
    currentPlayer,
    gameFinished,
    gameCount,
    matchWinner,
  }),
);
