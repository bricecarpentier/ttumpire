import React from 'react';
import { ScrollView } from 'react-native';
import NavigationScreenButton from '../../components/NavigationScreenButton';

import styles from './ChooseRule.styles';
import { Rule } from '../types/rule';
import { EventHandler } from '../types/eventhandler';

interface ChooseRuleProps {
  chooseRule: (rule: Rule) => EventHandler;
  rules: Rule[];
}

const ChooseRule = (props: ChooseRuleProps) => {
  const { rules, chooseRule } = props;
  return (
    <ScrollView style={styles.root} centerContent>
      {rules.map((rule) => (
        <NavigationScreenButton
          onPress={chooseRule(rule)}
          key={rule.name}
          title={rule.name}
          backgroundStyle={styles.buttonBackground}
          textStyle={styles.button}
        />
      ))}
    </ScrollView>
  );
};

export default ChooseRule;
