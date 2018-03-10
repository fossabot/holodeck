import { rem } from 'polished';

const fontSizes = {
  extraSmall: ({ theme }) => `font-size: ${rem(theme.typography.sizes.extraSmall)};`,
  small: ({ theme }) => `font-size: ${rem(theme.typography.sizes.small)};`,
  large: ({ theme }) => `font-size: ${rem(theme.typography.sizes.large)};`,
  flow: ({theme}) => `font-size: ${rem(theme.typography.sizes.flow)}`
};

export default fontSizes;
