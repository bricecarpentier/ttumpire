import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { RootStackParamList } from '../../App.types';

type TimerEffectProps = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  navigation: StackNavigationProp<RootStackParamList, 'timer'>;
  gameId: string;
  matchId: string;
};

export const timerEffect = (props: TimerEffectProps) => {
  const { counter, setCounter, navigation, matchId, gameId } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      navigation.navigate('ingame', {
        matchId,
        gameId,
      });
    }
  }, [counter, setCounter, navigation, matchId, gameId]);
};
