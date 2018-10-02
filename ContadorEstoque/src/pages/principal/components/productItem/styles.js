import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({

  form: {
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: metrics.baseMargin,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    width: 100,
  },
  buttons: {
    flexDirection: 'row',
  },
});

export default styles;
