import { createSlice } from '@reduxjs/toolkit';

type Match = {
  id: string;
};

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
