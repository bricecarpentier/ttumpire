import {
  Actions,
  SceneProps as DefaultSceneProps,
} from 'react-native-router-flux';

export interface SceneProps extends DefaultSceneProps {
  navigation: Actions;
}
