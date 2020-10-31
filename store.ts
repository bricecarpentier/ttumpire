import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import games from './features/games';
import matches from './features/matches';

const rootReducer = combineReducers({ games, matches });
export type RootState = ReturnType<typeof rootReducer>;

export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;

export default () => {
  const store = configureStore({ reducer: rootReducer });
  return store;
};
