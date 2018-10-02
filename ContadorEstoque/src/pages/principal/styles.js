import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.danger,
    paddingBottom: metrics.baseMargin,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleProducts: {
    color: colors.darkTransparent,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textIncluir: {
    color: colors.danger,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  form: {
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    paddingBottom: metrics.baseMargin,
  },
  formItem: {
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: metrics.baseMargin,
  },
  textInput: {
    backgroundColor: colors.success,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    height: 42,
    color: colors.white,
    textAlign: 'center',
    fontSize: 18,
    marginTop: metrics.basePadding,
  },
  btn: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
    width: 80,
    height: 40,
    marginHorizontal: metrics.basePadding,
    backgroundColor: colors.white,
  },
});

export default styles;
