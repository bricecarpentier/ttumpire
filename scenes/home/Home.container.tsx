import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { RootStackParamList } from '../../App.types';
import { actions } from '../../features/matches';
import HomeComponent from './Home.component';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'home'>;
};

const HomeContainer = (props: Props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const newGame = useCallback(() => {
    const matchId = uuidv4();
    dispatch(actions.matchCreated({ matchId }));
    navigation.push('choose-rule', { matchId });
  }, [dispatch, navigation]);
  return <HomeComponent newGame={newGame} />;
};

export default HomeContainer;
