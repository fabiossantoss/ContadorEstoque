import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.success,
  },
  form: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin / 2,
    marginHorizontal: metrics.basePadding,
  },
});

export default styles;
