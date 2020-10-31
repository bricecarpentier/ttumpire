import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actions, selectors } from '../../features/games';
import { useTypedSelector } from '../../store';
import InGameComponent from './InGame.component';

type InGameContainerProps = {
  navigation: any;
  firstPlayer?: 'player1' | 'player2';
};

const InGameContainer = (props: InGameContainerProps) => {
  const dispatch = useDispatch();

  const gameId = 'game1';
  const player1Scored = useCallback(
    () => dispatch(actions.pointScored({ gameId, player: 'player1' })),
    [dispatch],
  );
  const player2Scored = useCallback(
    () => dispatch(actions.pointScored({ gameId, player: 'player2' })),
    [dispatch],
  );

  const game = useTypedSelector((state) => selectors.selectGame(state, gameId));
  const currentPlayer = useTypedSelector((state) =>
    selectors.selectCurrentPlayer(state, gameId),
  );
  const { player1Score, player2Score } = game;

  const finished = useTypedSelector((state) =>
    selectors.selectIsGameFinished(state, gameId),
  );
  if (finished) {
    setTimeout(() => props.navigation.pop(), 0);
  }

  return (
    <InGameComponent
      player1Scored={player1Scored}
      player1CurrentScore={player1Score}
      player2Scored={player2Scored}
      player2CurrentScore={player2Score}
      currentPlayer={currentPlayer}
    />
  );
};

export default InGameContainer;
