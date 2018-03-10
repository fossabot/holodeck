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

  it('renders correctly', () => {
    const tree = renderWithTheme(
      <H2>Headline 2</H2>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderWithTheme(
      <H3>Headline 3</H3>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderWithTheme(
      <H4>Headline 4</H4>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderWithTheme(
      <H5>Headline 5</H5>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderWithTheme(
      <H6>Headline 6</H6>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
