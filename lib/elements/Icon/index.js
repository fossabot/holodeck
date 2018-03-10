import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { rem } from 'polished';

import {
  fontColors,
} from "../../modifiers";

const customModifiers = {
  extraSmall: (props) => `
    font-size: ${rem(props.theme.typography.sizes.medium * 1.5)};
  `,
  small: (props) => `
    font-size: ${rem(props.theme.typography.sizes.medium * 2)};
  `,
  large: (props) => `
    font-size: ${rem(props.theme.typography.sizes.medium * 3)};
  `,
};

const modifierConfig = {
  ...fontColors,
  ...customModifiers,
};

function UnstyledIcon(props) {
  return <FontAwesome {...props} />;
};


const Icon = styled(UnstyledIcon)`
  color: ${props => props.theme.colors.text};
  font-size: ${props => rem(props.theme.typography.sizes.medium * 2.5)};
`;

/** @component */
export default Icon;
