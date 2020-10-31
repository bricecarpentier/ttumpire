import { createSlice } from '@reduxjs/toolkit';
import { pointScored } from './reducers';
import * as types from './types';
import * as selectors from './selectors';

const GameSlice = createSlice({
  name: 'games',
  initialState: {
    game1: {
      id: 'game1',
      player1Score: 0,
      player2Score: 0,
      firstPlayer: 'player1',
    },
  } as types.GameState,
  reducers: {
    pointScored: pointScored,
  },
});

const { actions } = GameSlice;

export { actions, types, selectors };
export default GameSlice.reducer;
