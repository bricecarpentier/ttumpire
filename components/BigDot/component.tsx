import React from 'react';
import { View } from 'react-native';
import styles from './styles';

type BigDotProps = {
  variant: 'left' | 'right';
  hidden: boolean;
};

const BigDot = (props: BigDotProps) => {
  const sideStyle = props.variant === 'left' ? styles.left : styles.right;
  return (
    <View style={[styles.root, sideStyle, props.hidden && styles.hidden]} />
  );
};
export default BigDot;
