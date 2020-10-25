import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { EventHandler } from '../../scenes/types/eventhandler';
import BigDot from '../BigDot';
import styles from './styles';

const noop = () => null;

type Variant = 'point' | 'game';

type ScoreCardProps = {
  variant: Variant;
  side: 'left' | 'right';
  onPress?: EventHandler;
  onLongPress?: EventHandler;
  value: number;
  current: boolean;
};

const shouldHideDot = (variant: Variant, current: boolean) => {
  if (variant === 'game') {
    return true;
  }
  return !current;
};

const ScoreCard = (props: ScoreCardProps) => (
  <TouchableHighlight
    style={[
      styles.root,
      props.variant === 'game' ? styles.rootGame : styles.rootPoint,
    ]}
    activeOpacity={0.9}
    disabled={!(props.onPress || props.onLongPress)}
    onPress={props.onPress ?? noop}
    onLongPress={props.onLongPress ?? noop}>
    <>
      <Text
        style={[
          styles.text,
          props.variant === 'game' ? styles.textGame : styles.textPoint,
        ]}>
        {props.value}
      </Text>
      <BigDot
        align={props.side}
        hidden={shouldHideDot(props.variant, props.current)}
      />
    </>
  </TouchableHighlight>
);

export default ScoreCard;
