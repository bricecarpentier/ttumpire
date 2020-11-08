import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background(),
  },
  root: {
    backgroundColor: colors.background(),
  },
  buttonBackground: {
    backgroundColor: colors.secondary(),
    marginBottom: 4,
    marginTop: 4,
    padding: 16,
  },
  button: {
    color: colors.primary(),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
