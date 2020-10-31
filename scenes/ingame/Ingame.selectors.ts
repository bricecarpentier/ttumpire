import { createSelector } from '@reduxjs/toolkit';
import { selectors as gameSelectors } from '../../features/games';
import { RootState } from '../../store';

const selectGame = createSelector(
  gameSelectors.selectGames,
  (state: unknown, id: string) => id,
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

export default (gameId: string) => ({
  selectGame: (state: RootState) => selectGame(state, gameId),
  selectCurrentPlayer: (state: RootState) => selectCurrentPlayer(state, gameId),
  selectIsGameFinished: (state: RootState) =>
    selectIsGameFinished(state, gameId),
});
