import { StyleSheet } from 'react-native';

import Fonts from '../../styles/fonts';

import { verticalScale, moderateScale } from '../../utils/styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(446),
  },
  noMoreCardsText: {
    fontFamily: Fonts.NunitoSansRegular,
    fontSize: moderateScale(16),
    lineHeight: verticalScale(20),
    fontWeight: 'bold',
    color: 'rgba(67, 65, 65, 1)',
    textAlign: 'center',
  },
});

export default styles;
