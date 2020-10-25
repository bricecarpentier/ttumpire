import React from 'react';
import { View } from 'react-native';
import ScoreCard from '../../components/ScoreCard';
import { EventHandler } from '../types/eventhandler';
import styles from './InGame.styles';

type InGameProps = {
  player1Scored: EventHandler;
  player1Cancel?: EventHandler;
  player1CurrentScore: number;
  player2Scored: EventHandler;
  player2Cancel?: EventHandler;
  player2CurrentScore: number;
  currentPlayer: 'player1' | 'player2';
};

const noop = () => null;

const InGame = (props: InGameProps) => (
  <View style={styles.root}>
    <View style={styles.item}>
      <ScoreCard
        variant="left"
        onPress={props.player1Scored}
        onLongPress={noop}
        value={props.player1CurrentScore}
        current={props.currentPlayer === 'player1'}
      />
    </View>
    <View style={styles.item}>
      <ScoreCard
        variant="right"
        onPress={props.player2Scored}
        onLongPress={noop}
        value={props.player2CurrentScore}
        current={props.currentPlayer === 'player2'}
      />
    </View>
  </View>
);

export default InGame;
