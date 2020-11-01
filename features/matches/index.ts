import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';
import * as selectors from './selectors';
import * as types from './types';

const MatchSlice = createSlice({
  name: 'matches',
  initialState: {} as types.MatchState,
  reducers,
});

const { actions } = MatchSlice;

export { actions, selectors, types };
export default MatchSlice.reducer;
