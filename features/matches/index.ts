import { createSlice } from '@reduxjs/toolkit';

import * as reducers from './reducers';
import * as selectors from './selectors';
import * as types from './types';
import * as utils from './utils';

const MatchSlice = createSlice({
  name: 'matches',
  initialState: {} as types.MatchState,
  reducers,
});

const { actions } = MatchSlice;

export { actions, selectors, types, utils };
export default MatchSlice.reducer;
