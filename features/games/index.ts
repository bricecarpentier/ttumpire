import { createSlice } from '@reduxjs/toolkit';

import * as reducers from './reducers';
import * as types from './types';
import * as selectors from './selectors';
import * as utils from './utils';

const GameSlice = createSlice({
  name: 'games',
  initialState: {} as types.GameState,
  reducers,
});

const { actions } = GameSlice;

export { actions, types, selectors, utils };
export default GameSlice.reducer;
