import { createSlice } from '@reduxjs/toolkit';

type Match = {};

type MatchState = {
  [id: string]: Match;
};

const initialState: MatchState = {};

const MatchSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {},
});

export default MatchSlice.reducer;
