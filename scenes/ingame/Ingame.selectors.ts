import { createSelector } from '@reduxjs/toolkit';
import { selectors as gameSelectors } from '../../features/games';
import { GamePlayer } from '../../features/games/types';
import { selectors as matchSelectors } from '../../features/matches';
import { Match } from '../../features/matches/types';
import { RootState } from '../../store';

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

const getSelectors = (matchId: string, gameId: string) => ({
  selectGame: (state: RootState) => selectGame(state, { gameId }),
  selectCurrentPlayer: (state: RootState) =>
    selectCurrentPlayer(state, { gameId }),
  selectIsGameFinished: (state: RootState) =>
    selectIsGameFinished(state, { gameId }),
  selectMatch: (state: RootState) => selectMatch(state, { matchId }),
  selectMatchWinner: (state: RootState) =>
    selectMatchWinner(state, { matchId }),
});

export default getSelectors;
