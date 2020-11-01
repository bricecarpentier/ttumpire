import { createSelector } from '@reduxjs/toolkit';
import { selectors as gameSelectors } from '../../features/games';
import { GamePlayer } from '../../features/games/types';
import { selectors as matchSelectors } from '../../features/matches';
import { Match } from '../../features/matches/types';

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

const selectMatchWinner = createSelector(
  selectMatch,
  gameSelectors.selectGames,
  (match: Match, allGames) => {
    const { games: gameIds } = match;
    const games = gameIds.map((id) => gameSelectors.selectGame(allGames, id));
    const gameWinners = games
      .map((g) => gameSelectors.selectGameWinner(g))
      .filter(Boolean);
    return matchSelectors.selectMatchWinner(match, gameWinners as GamePlayer[]);
  },
);

export default createSelector(
  selectMatch,
  selectGame,
  selectCurrentPlayer,
  selectIsGameFinished,
  selectMatchWinner,
  (match, game, currentPlayer, gameFinished, matchWinner) => ({
    match,
    game,
    currentPlayer,
    gameFinished,
    matchWinner,
  }),
);
