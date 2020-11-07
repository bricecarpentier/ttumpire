/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StackNavigationProp } from '@react-navigation/stack';

import { actions as gameActions } from '@tt:features/games';
import {
  actions as matchActions,
  types as matchTypes,
} from '@tt:features/matches';
import { RootStackParamList } from '@tt:types/navigation';
import { GameRule } from '@tt:types/rule';

type GameEndEffectProps = {
  dispatch: React.Dispatch<any>;
  navigation: StackNavigationProp<RootStackParamList, 'ingame'>;
  matchId: string;
  gameRule: GameRule;
  gameFinished: boolean;
  matchWinner: matchTypes.MatchPlayer | null;
};

export const gameEndEffect = (props: GameEndEffectProps) => {
  const {
    dispatch,
    navigation,
    matchId,
    gameRule,
    gameFinished,
    matchWinner,
  } = props;
  useEffect(() => {
    if (!gameFinished) {
      return;
    }

    if (matchWinner) {
      setTimeout(() => navigation.popToTop(), 0);
    } else {
      const newGameId = uuidv4();
      dispatch(
        gameActions.gameCreated({
          gameId: newGameId,
          rule: gameRule,
          firstPlayer: 'player1',
        }),
      );
      dispatch(
        matchActions.gameAdded({
          matchId,
          gameId: newGameId,
        }),
      );
      setTimeout(
        () =>
          navigation.push('timer', {
            matchId,
            gameId: newGameId,
          }),
        0,
      );
    }
  }, [dispatch, matchId, gameFinished, matchWinner, gameRule, navigation]);
};
