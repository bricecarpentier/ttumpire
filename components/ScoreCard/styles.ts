import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
  },
  rootPoint: {
    borderRadius: 48,
    width: '30%',
    backgroundColor: colors.darkerBackground(),
  },
  rootGame: {
    alignSelf: 'flex-end',
    borderRadius: 24,
    width: '15%',
    height: '50%',
    backgroundColor: colors.secondary(),
  },
  rootTimer: {
    borderRadius: 48,
    width: '50%',
    backgroundColor: colors.darkerBackground(),
  },
  text: {
    color: colors.empty(),
    textAlign: 'center',
  },
  textPoint: {
    fontSize: 144,
  },
  textGame: {
    fontSize: 96,
  },
  textTimer: {
    fontSize: 144,
  },
});

export default styles;
