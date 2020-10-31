import { createSlice } from '@reduxjs/toolkit';
import { gameCreated, pointScored } from './reducers';
import * as types from './types';
import * as selectors from './selectors';

const GameSlice = createSlice({
  name: 'games',
  initialState: {} as types.GameState,
  reducers: {
    gameCreated,
    pointScored,
  },
});

const { actions } = GameSlice;

export { actions, types, selectors };
export default GameSlice.reducer;
