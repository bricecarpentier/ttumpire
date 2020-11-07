import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import ScoreCard from '@tt:components/ScoreCard';

import styles from './Timer.styles';

type TimerProps = {
  remainingTime: number;
};

const Timer = (props: TimerProps) => (
  <SafeAreaView style={styles.root}>
    <ScoreCard
      variant="timer"
      side="left"
      value={props.remainingTime}
      current={false}
    />
  </SafeAreaView>
);

export default Timer;
