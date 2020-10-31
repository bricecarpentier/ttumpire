import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';

import styles from './App.styles';
import Home from './scenes/home';
import InGame from './scenes/ingame';

declare const global: { HermesInternal: null | {} };

const Stack = createStackNavigator();

const App = () => {
  const navigationRef = React.useRef<NavigationContainerRef>(null);
  useReduxDevToolsExtension(navigationRef);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="ingame" component={InGame} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
