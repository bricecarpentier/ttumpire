import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { EventHandler } from '../../scenes/types/eventhandler';
import BigDot from '../BigDot';
import styles from './styles';

const noop = () => null;

type Variant = 'point' | 'game' | 'timer';

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

const rootStyles = {
  game: styles.rootGame,
  point: styles.rootPoint,
  timer: styles.rootTimer,
};

const textStyles = {
  game: styles.textGame,
  point: styles.textPoint,
  timer: styles.textTimer,
};

const ScoreCard = (props: ScoreCardProps) => (
  <TouchableHighlight
    style={[styles.root, rootStyles[props.variant]]}
    activeOpacity={0.9}
    disabled={!(props.onPress || props.onLongPress)}
    onPress={props.onPress ?? noop}
    onLongPress={props.onLongPress ?? noop}>
    <>
      <Text style={[styles.text, textStyles[props.variant]]}>
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
