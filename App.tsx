import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';

import styles from './App.styles';
import Home from './scenes/home';
import InGame from './scenes/ingame';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <Router sceneStyle={styles.scene}>
          <Stack key="root" hideNavBar>
            <Scene key="home" component={Home} />
            <Scene key="ingame" component={InGame} />
          </Stack>
        </Router>
      </SafeAreaView>
    </>
  );
};

export default App;
