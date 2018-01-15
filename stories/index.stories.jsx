import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Holodeck from '../lib/holodeck';
import { theme as themeLight } from '../lib/themes/default-light';
import { theme as themeDark } from '../lib/themes/default-dark';

storiesOf('Globals', module).add('Helpers', () => (
  <Holodeck theme={themeLight}>
    <h2>Classes</h2>
    <h3>Flow</h3>
    <h3>Truncate</h3>
  </Holodeck>
));

storiesOf('Themes', module)
  .add('Light', () => <Holodeck theme={themeLight} />)
  .add('Dark', () => <Holodeck theme={themeDark} />);
