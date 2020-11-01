import React from 'react';
import { View } from 'react-native';
import ScoreCard from '../../components/ScoreCard';
import { EventHandler } from '../types/eventhandler';
import styles from './InGame.styles';

type InGameProps = {
  player1Scored: EventHandler;
  player1Cancel?: EventHandler;
  player1CurrentScore: number;
  player1Games: number;
  player2Scored: EventHandler;
  player2Cancel?: EventHandler;
  player2Games: number;
  player2CurrentScore: number;
  currentPlayer: 'player1' | 'player2';
};

const InGame = (props: InGameProps) => (
  <View style={styles.root}>
    <ScoreCard
      variant="game"
      side="left"
      value={props.player1Games}
      current={props.currentPlayer === 'player1'}
    />
    <ScoreCard
      variant="point"
      side="left"
      onPress={props.player1Scored}
      value={props.player1CurrentScore}
      current={props.currentPlayer === 'player1'}
    />
    <ScoreCard
      variant="point"
      side="right"
      onPress={props.player2Scored}
      value={props.player2CurrentScore}
      current={props.currentPlayer === 'player2'}
    />
    <ScoreCard
      variant="game"
      side="right"
      value={props.player2Games}
      current={props.currentPlayer === 'player1'}
    />
  </View>
);

export default InGame;
