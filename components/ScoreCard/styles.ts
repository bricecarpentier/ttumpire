import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
  root: {
    borderRadius: 48,
    backgroundColor: colors.darkerBackground(),
  },
  text: {
    color: colors.empty(),
    fontSize: 256,
    textAlign: 'center',
  },
});

export default styles;
