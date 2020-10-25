import React, { useCallback } from 'react';
import HomeComponent from './Home.component';
import { SceneProps } from '../types/scene';

const HomeContainer = (props: SceneProps) => {
  const { navigation } = props;
  const newGame = useCallback(() => {
    navigation.push('ingame');
  }, [navigation]);
  return <HomeComponent newGame={newGame} />;
};

export default HomeContainer;
