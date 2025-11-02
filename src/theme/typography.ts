import {scaleFont} from '../utils/responsive';

export const Typography = {
  h1: {
    fontSize: scaleFont(28), 
    fontWeight: '700' as const,
    fontFamily: 'Poppins-Bold',
  },
  h2: {
    fontSize: scaleFont(22), 
    fontWeight: '600' as const,
    fontFamily: 'Poppins-SemiBold',
  },
  body: {
    fontSize: scaleFont(16), 
    fontWeight: '400' as const,
    fontFamily: 'Poppins-Regular',
  },
  caption: {
    fontSize: scaleFont(12), 
    fontWeight: '300' as const,
    fontFamily: 'Poppins-Light',
  },
};