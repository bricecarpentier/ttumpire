import React from 'react';
import { ScrollView } from 'react-native';
import HomeScreenButton from '../../components/HomeScreenButton';

import styles from './Home.styles';
import { EventHandler } from '../types/eventhandler';

interface HomeProps {
  newGame: EventHandler;
}

const Home = (props: HomeProps) => {
  return (
    <ScrollView style={styles.root} centerContent>
      <HomeScreenButton
        title="NEW GAME"
        onPress={props.newGame}
        backgroundStyle={styles.buttonBackground}
        textStyle={styles.button}
      />
    </ScrollView>
  );
};

export default Home;