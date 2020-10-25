import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { EventHandler } from '../../scenes/types/eventhandler';
import BigDot from '../BigDot';
import styles from './styles';

type ScoreCardProps = {
  variant: 'left' | 'right';
  onPress: EventHandler;
  onLongPress: EventHandler;
  value: number;
  current?: boolean;
};

const ScoreCard = (props: ScoreCardProps) => (
  <TouchableHighlight
    style={styles.root}
    activeOpacity={0.9}
    onPress={props.onPress}
    onLongPress={props.onLongPress}>
    <>
      <Text style={styles.text}>{props.value}</Text>
      <BigDot variant={props.variant} hidden={!props.current} />
    </>
  </TouchableHighlight>
);

export default ScoreCard;
