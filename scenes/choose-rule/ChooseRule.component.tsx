import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavigationScreenButton from '@tt:components/NavigationScreenButton';
import { EventHandler } from '@tt:types/eventhandler';
import { Rule } from '@tt:types/rule';

import styles from './ChooseRule.styles';

interface ChooseRuleProps {
  chooseRule: (rule: Rule) => EventHandler;
  rules: Rule[];
}

const ChooseRule = (props: ChooseRuleProps) => {
  const { rules, chooseRule } = props;
  return (
    <SafeAreaView style={styles.safeArea}>
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
    </SafeAreaView>
  );
};

export default ChooseRule;
