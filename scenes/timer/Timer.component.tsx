import React from 'react';
import styles from './Timer.styles';
import ScoreCard from '../../components/ScoreCard';
import { SafeAreaView } from 'react-native-safe-area-context';

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
