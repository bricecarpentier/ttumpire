import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavigationScreenButton from '@tt:components/NavigationScreenButton';
import { EventHandler } from '@tt:types/eventhandler';

import styles from './Home.styles';

interface HomeProps {
  newGame: EventHandler;
}

const Home = (props: HomeProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.root} centerContent>
        <NavigationScreenButton
          title="NEW GAME"
          onPress={props.newGame}
          backgroundStyle={styles.buttonBackground}
          textStyle={styles.button}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
