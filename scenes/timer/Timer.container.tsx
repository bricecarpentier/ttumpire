import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createSelector } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { RootStackParamList } from '../../App.types';
import { selectors } from '../../features/matches';
import { useRootSelector } from '../../store';
import Timer from './Timer.component';
import { timerEffect } from './Timer.effects';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'timer'>;
  route: RouteProp<RootStackParamList, 'timer'>;
};

const selectMatch = createSelector(
  selectors.selectMatches,
  (state: unknown, id: string) => id,
  selectors.selectMatch,
);

const TimerContainer = (props: Props) => {
  const { navigation } = props;
  const { matchId, gameId } = props.route.params;
  const match = useRootSelector((state) => selectMatch(state, matchId));
  const [counter, setCounter] = useState(match.rule.match.secondsBetweenGames);

  timerEffect({ counter, setCounter, navigation, gameId, matchId });

  return <Timer remainingTime={counter} />;
};

export default TimerContainer;
