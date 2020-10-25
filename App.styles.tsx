import { StyleSheet } from 'react-native';
import { colors } from './theme';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background(),
  },
  scene: {
    backgroundColor: colors.background(),
  },
  label: {
    color: colors.primary(),
  },
});

export default styles;
