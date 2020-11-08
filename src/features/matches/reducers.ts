import { PayloadAction } from '@reduxjs/toolkit';

import { NewRulesAmateur } from '@tt:rules';

import { MatchAlreadyExistsError, MatchNotFoundError } from './errors';
import {
  GameAddedPayload,
  MatchCreatedPayload,
  MatchState,
  RuleChangedPayload,
} from './types';

export const matchCreated = (
  state: MatchState,
  action: PayloadAction<MatchCreatedPayload>,
) => {
  const { matchId } = action.payload;
  if (state[matchId]) {
    throw new MatchAlreadyExistsError(matchId);
  }
  state[matchId] = {
    id: matchId,
    rule: NewRulesAmateur,
    games: [],
    startSwitch: false,
  };
};

export const ruleChanged = (
  state: MatchState,
  action: PayloadAction<RuleChangedPayload>,
) => {
  const { matchId, rule } = action.payload;
  const match = state[matchId];
  if (!match) {
    throw new MatchNotFoundError(matchId);
  }
  match.rule = rule;
};

export const gameAdded = (
  state: MatchState,
  action: PayloadAction<GameAddedPayload>,
) => {
  const { matchId, gameId } = action.payload;
  const match = state[matchId];
  if (!match) {
    throw new MatchNotFoundError(matchId);
  }
  match.games.push(gameId);
};
