import { StyleSheet } from 'react-native';

import { verticalScale, horizontalScale } from '../../utils/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  buttonsContainer: {
    paddingTop: verticalScale(58),
    flexDirection: 'row',
  },
  likeButtonContainer: {
    paddingLeft: horizontalScale(48),
  },
});

export default styles;
