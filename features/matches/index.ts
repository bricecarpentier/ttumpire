import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';
import * as selectors from './selectors';
import { MatchState } from './types';

const MatchSlice = createSlice({
  name: 'matches',
  initialState: {} as MatchState,
  reducers,
});

const { actions } = MatchSlice;

export { actions, reducers, selectors };
export default MatchSlice.reducer;
