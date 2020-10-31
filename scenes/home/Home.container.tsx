import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { actions } from '../../features/games';
import HomeComponent from './Home.component';

const HomeContainer = (props: any) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const newGame = useCallback(() => {
    const gameId = uuidv4();
    dispatch(actions.gameCreated({ gameId, firstPlayer: 'player1' }));
    navigation.push('choose-rule', { gameId });
  }, [dispatch, navigation]);
  return <HomeComponent newGame={newGame} />;
};

export default HomeContainer;
