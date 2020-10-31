import React, { useCallback } from 'react';
import HomeComponent from './Home.component';

const HomeContainer = (props: any) => {
  const { navigation } = props;
  const newGame = useCallback(() => {
    navigation.push('ingame');
  }, [navigation]);
  return <HomeComponent newGame={newGame} />;
};

export default HomeContainer;
