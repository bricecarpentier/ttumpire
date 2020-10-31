import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../features/games';
import * as rules from '../../rules';
import { EventHandler } from '../types/eventhandler';
import { Rule } from '../types/rule';
import ChooseRule from './ChooseRule.component';

const ChooseRuleContainer = (props: any) => {
  const { navigation } = props;
  const gameId = props?.route?.params?.gameId;
  const dispatch = useDispatch();

  const chooseRule = useCallback<(arg0: Rule) => EventHandler>(
    (rule: Rule) => () => {
      dispatch(actions.ruleChanged({ gameId, rule: rule.game }));
      navigation.push('ingame', { gameId });
    },
    [dispatch, navigation, gameId],
  );

  const rulesList = useMemo(() => Object.values(rules), []);
  return <ChooseRule rules={rulesList} chooseRule={chooseRule} />;
};

export default ChooseRuleContainer;
