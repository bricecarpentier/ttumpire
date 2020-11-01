import React from 'react';
import { View } from 'react-native';
import styles from './Timer.styles';
import ScoreCard from '../../components/ScoreCard';

type TimerProps = {
  remainingTime: number;
};

const Timer = (props: TimerProps) => (
  <View style={styles.root}>
    <ScoreCard
      variant="timer"
      side="left"
      value={props.remainingTime}
      current={false}
    />
  </View>
);

export default Timer;
