import React from 'react';
import { H1, H2, H3, H4, H5, H6 } from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';

describe('Headings elements', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <H1>Headline 1</H1>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
