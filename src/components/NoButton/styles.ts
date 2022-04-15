import { StyleSheet } from 'react-native';

import { moderateScale } from '../../utils/styles';

const styles = StyleSheet.create({
  container: {
    width: moderateScale(54),
    height: moderateScale(54),
    borderRadius: moderateScale(54) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  image: {
    width: moderateScale(16),
    height: moderateScale(16),
  },
});

export default styles;
