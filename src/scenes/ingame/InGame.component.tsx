import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import ScoreCard from '@tt:components/ScoreCard';
import { EventHandler } from '@tt:types/eventhandler';

import styles from './InGame.styles';

type InGameProps = {
  switch: boolean;
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
  <SafeAreaView
    style={[styles.root, props.switch ? styles.rootSwitch : undefined]}>
    <ScoreCard
      variant="game"
      side="left"
      value={props.player1Games}
      current={props.currentPlayer === 'player1'}
    />
    <ScoreCard
      variant="point"
      side={props.switch ? 'right' : 'left'}
      onPress={props.player1Scored}
      value={props.player1CurrentScore}
      current={props.currentPlayer === 'player1'}
    />
    <ScoreCard
      variant="point"
      side={props.switch ? 'left' : 'right'}
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
  </SafeAreaView>
);

export default InGame;
