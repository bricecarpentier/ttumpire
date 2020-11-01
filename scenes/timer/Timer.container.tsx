import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createSelector } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { RootStackParamList } from '../../App.types';
import { selectors } from '../../features/matches';
import { useRootSelector } from '../../store';
import Timer from './Timer.component';

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
  const { matchId, gameId } = props.route.params;
  const match = useRootSelector((state) => selectMatch(state, matchId));
  const [counter, setCounter] = useState(match.rule.match.secondsBetweenGames);

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      props.navigation.push('ingame', {
        matchId,
        gameId,
      });
    }
  }, [counter, props.navigation, matchId, gameId]);
  return <Timer remainingTime={counter} />;
};

export default TimerContainer;
