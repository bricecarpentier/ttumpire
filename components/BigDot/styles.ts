import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    backgroundColor: colors.empty(),
    width: 24,
    height: 24,
    borderRadius: 12,
    bottom: 24,
  },
  left: {
    left: 24,
  },
  right: {
    right: 24,
  },
  hidden: {
    opacity: 0,
  },
});

export default styles;
