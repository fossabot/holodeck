import React from 'react';
import { storiesOf } from '@storybook/react';
import Holodeck from '../lib/holodeck';
import { theme as themeDark } from '../lib/themes/default-dark';
import { theme as themeLight } from '../lib/themes/default-light';
import { H1, H2, H3, H4, H5, H6 } from '../lib/typography/headings';
import { Flow } from '../lib/typography/flow';

storiesOf('Typography', module)
  .add('Headings', () => (
    <Holodeck theme={themeLight}>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
    </Holodeck>
  ))
  .add('Flow', () => (
    <Holodeck>
      <p>This is normal text without.</p>
      <Flow>This is flow text. You can either use the Flow component or as a class '.flow'.</Flow>
    </Holodeck>
  ));
