import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import { Provider } from 'react-redux';

import styles from './App.styles';
import { RootStackParamList } from './App.types';
import Home from './scenes/home';
import InGame from './scenes/ingame';
import ChooseRule from './scenes/choose-rule';
import Timer from './scenes/timer';
import createStore from './store';

const store = createStore();
const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const navigationRef = React.useRef<NavigationContainerRef>(null);
  useReduxDevToolsExtension(navigationRef);

  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safeArea}>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="home" component={Home} />
              <Stack.Screen name="choose-rule" component={ChooseRule} />
              <Stack.Screen name="ingame" component={InGame} />
              <Stack.Screen name="timer" component={Timer} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
