import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { actions } from '../../features/games';
import { actions as matchActions } from '../../features/matches';
import { useRootSelector } from '../../store';
import InGameComponent from './InGame.component';
import getSelectors from './Ingame.selectors';

type InGameContainerProps = {
  navigation: any;
  route: {
    params: {
      gameId: string;
      matchId: string;
    };
  };
};

const InGameContainer = (props: InGameContainerProps) => {
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

  const selectors = getSelectors(matchId, gameId);

  const match = useRootSelector(selectors.selectMatch);
  const game = useRootSelector(selectors.selectGame);
  const currentPlayer = useRootSelector(selectors.selectCurrentPlayer);
  const { player1Score, player2Score } = game;

  const gameFinished = useRootSelector(selectors.selectIsGameFinished);
  const matchWinner = useRootSelector(selectors.selectMatchWinner);

  useEffect(() => {
    if (!gameFinished) {
      return;
    }

    if (matchWinner) {
      setTimeout(() => navigation.popToTop(), 0);
    } else {
      const newGameId = uuidv4();
      dispatch(
        actions.gameCreated({
          gameId: newGameId,
          rule: match.rule.game,
          firstPlayer: 'player1',
        }),
      );
      dispatch(
        matchActions.gameAdded({
          matchId,
          gameId: newGameId,
        }),
      );
      setTimeout(() => navigation.push('timer'), 0);
    }
  }, [
    dispatch,
    matchId,
    gameFinished,
    matchWinner,
    match.rule.game,
    navigation,
  ]);

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
