import React, { useCallback, useReducer } from 'react';
import { SceneProps } from '../types/scene';
import InGameComponent from './InGame.component';

type Player = 'player1' | 'player2';

type State = {
  player1Score: number;
  player2Score: number;
  finished: boolean;
};

type Action = { type: 'pointScored'; payload: { player: Player } };

const isGameFinished = (score1: number, score2: number): boolean => {
  if (score1 < 11 && score2 < 11) {
    return false;
  }
  return Math.abs(score1 - score2) >= 2;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'pointScored': {
      const score =
        action.payload.player === 'player1' ? 'player1Score' : 'player2Score';
      const stateWithNewScore = {
        ...state,
        [score]: state[score] + 1,
      };
      const { player1Score, player2Score } = stateWithNewScore;

      return {
        ...stateWithNewScore,
        finished: isGameFinished(player1Score, player2Score),
      };
    }
  }
};

type InGameContainerProps = SceneProps & {
  firstPlayer?: 'player1' | 'player2';
};

const initialState = {
  player1Score: 0,
  player2Score: 0,
  finished: false,
};

const playerToIndex = (player: Player) => (player === 'player1' ? 0 : 1);
const indexToPlayer = (idx: number) => (idx % 2 === 1 ? 'player2' : 'player1');

const computeCurrentPlayer = (
  firstPlayer: Player,
  score1: number,
  score2: number,
): Player => {
  const idx = playerToIndex(firstPlayer);
  const totalScore = score1 + score2;
  // 2 serve each until 10-10 then 1 serve each
  const isFirst =
    totalScore < 20 ? [0, 1].includes(totalScore % 4) : totalScore % 2 === 0;
  const indexOfNext = isFirst ? idx : idx + 1;
  return indexToPlayer(indexOfNext);
};

const InGameContainer = (props: InGameContainerProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { player1Score, player2Score, finished } = state;

  const player1Scored = useCallback(() => {
    dispatch({ type: 'pointScored', payload: { player: 'player1' } });
  }, [dispatch]);

  const player2Scored = useCallback(() => {
    dispatch({ type: 'pointScored', payload: { player: 'player2' } });
  }, [dispatch]);

  if (finished) {
    setTimeout(() => props.navigation.pop(), 0);
  }

  return (
    <InGameComponent
      player1Scored={player1Scored}
      player1CurrentScore={player1Score}
      player2Scored={player2Scored}
      player2CurrentScore={player2Score}
      currentPlayer={computeCurrentPlayer(
        props.firstPlayer ?? 'player2',
        state.player1Score,
        state.player2Score,
      )}
    />
  );
};

export default InGameContainer;
