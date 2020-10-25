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
  text: {
    color: colors.empty(),
    textAlign: 'center',
  },
  textPoint: {
    fontSize: 200,
  },
  textGame: {
    fontSize: 96,
  },
});

export default styles;
