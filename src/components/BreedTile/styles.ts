import { StyleSheet } from 'react-native';

import Fonts from '../../styles/fonts';

import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/styles';

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
  },
  image: {
    width: horizontalScale(343),
    height: verticalScale(446),
    borderRadius: 16,
  },
  bottomContentContainer: {
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: horizontalScale(20),
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
  },
  nameAffectionLevelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameAffectionLevelText: {
    fontFamily: Fonts.NunitoSansRegular,
    fontSize: moderateScale(16),
    lineHeight: verticalScale(20),
    fontWeight: 'bold',
    color: 'rgba(67, 65, 65, 1)',
  },
  originText: {
    fontFamily: Fonts.NunitoSansRegular,
    fontSize: moderateScale(8),
    lineHeight: verticalScale(10),
    fontWeight: '700',
    color: 'rgba(191, 191, 192, 1)',
  },
});

export default styles;
