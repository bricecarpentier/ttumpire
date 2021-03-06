import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { RootStackParamList } from '@tt:types/navigation';
import { actions } from '@tt:features/games';
import { useRootSelector } from '@tt:store';

import InGameComponent from './InGame.component';
import { gameEndEffect } from './InGame.effects';
import selectAll from './InGame.selectors';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'ingame'>;
  route: RouteProp<RootStackParamList, 'ingame'>;
};

const noop = () => null;

const InGameContainer = (props: Props) => {
  const { navigation } = props;
  const { gameId, matchId } = props.route.params;
  const dispatch = useDispatch();

  const player1Scored = useCallback(
    () => dispatch(actions.pointScored({ gameId, player: 'player1' })),
    [dispatch, gameId],
  );
  const player2Scored = useCallback(
    () => dispatch(actions.pointScored({ gameId, player: 'player2' })),
    [dispatch, gameId],
  );

  const {
    match,
    game,
    currentPlayer,
    gameFinished,
    shouldSwitch,
    gameCount,
    matchWinner,
  } = useRootSelector((state) => selectAll(state, { matchId, gameId }));
  const { player1Score, player2Score } = game;

  gameEndEffect({
    dispatch,
    navigation,
    matchId,
    gameRule: match.rule.game,
    gameFinished,
    matchWinner,
  });

  return (
    <InGameComponent
      player1Scored={gameFinished ? noop : player1Scored}
      player1CurrentScore={player1Score}
      player1Games={gameCount.player1}
      player2Scored={gameFinished ? noop : player2Scored}
      player2CurrentScore={player2Score}
      player2Games={gameCount.player2}
      currentPlayer={currentPlayer}
      switch={shouldSwitch}
    />
  );
};

export default InGameContainer;
