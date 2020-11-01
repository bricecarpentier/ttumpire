import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { RootStackParamList } from '../../App.types';
import { actions as gameActions } from '../../features/games';
import { actions as matchActions } from '../../features/matches';
import * as rules from '../../rules';
import { EventHandler } from '../types/eventhandler';
import { Rule } from '../types/rule';
import ChooseRule from './ChooseRule.component';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'choose-rule'>;
  route: RouteProp<RootStackParamList, 'choose-rule'>;
};

const ChooseRuleContainer = (props: Props) => {
  const { navigation, route } = props;
  const { matchId } = route.params;

  const dispatch = useDispatch();

  const chooseRule = useCallback<(arg0: Rule) => EventHandler>(
    (rule: Rule) => () => {
      dispatch(matchActions.ruleChanged({ matchId, rule: rule }));
      const gameId = uuidv4();
      dispatch(
        gameActions.gameCreated({
          gameId,
          rule: rule.game,
          firstPlayer: 'player1',
        }),
      );
      dispatch(matchActions.gameAdded({ gameId, matchId }));
      navigation.push('ingame', { gameId, matchId });
    },
    [dispatch, navigation, matchId],
  );

  const rulesList = useMemo(() => Object.values(rules), []);
  return <ChooseRule rules={rulesList} chooseRule={chooseRule} />;
};

export default ChooseRuleContainer;
