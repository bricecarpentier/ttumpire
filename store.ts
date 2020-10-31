import { combineReducers, configureStore } from '@reduxjs/toolkit';
import matches from './features/matches';
const rootReducer = combineReducers({ matches });
export type RootState = ReturnType<typeof rootReducer>;

export default () => {
  const store = configureStore({ reducer: rootReducer });
  return store;
};
