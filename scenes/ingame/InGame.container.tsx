import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../features/games';
import { useRootSelector } from '../../store';
import InGameComponent from './InGame.component';
import getSelectors from './Ingame.selectors';

type InGameContainerProps = {
  navigation: any;
  route: {
    params: {
      gameId: string;
    };
  };
};

const InGameContainer = (props: InGameContainerProps) => {
  const { gameId } = props.route.params;
  const dispatch = useDispatch();

  const player1Scored = useCallback(
    () => dispatch(actions.pointScored({ gameId, player: 'player1' })),
    [dispatch, gameId],
  );
  const player2Scored = useCallback(
    () => dispatch(actions.pointScored({ gameId, player: 'player2' })),
    [dispatch, gameId],
  );

  const sel = getSelectors(gameId);

  const game = useRootSelector(sel.selectGame);
  const currentPlayer = useRootSelector(sel.selectCurrentPlayer);
  const { player1Score, player2Score } = game;

  const finished = useRootSelector(sel.selectIsGameFinished);
  if (finished) {
    setTimeout(() => props.navigation.popToTop(), 0);
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
