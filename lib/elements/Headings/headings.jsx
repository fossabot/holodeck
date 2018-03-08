import React from 'react';
import styled, { css } from 'styled-components';

function getThemeFontSize(theme, heading) {
  return theme.typography.headings[heading].size;
}

function getThemeFontHeight(theme, heading) {
  return theme.typography.headings[heading].lineHeight;
}

function setMarging(theme, heading) {
  const headingSize = theme.typography.headings[heading].size;
  return css`
    margin: ${headingSize}/1.5 0 ${headingSize}/2.5 0;
  `;
}

function getColor(theme, heading) {
  const color = theme.typography.headings[heading].color;
  if (color !== '' || color !== null) {
    return css`
      color: ${color};
    `;
  }
  return null;
}

// TODO borders

export const H1 = styled.h1`
  font-size: ${props => getThemeFontSize(props.theme, 'h1')};
  line-height: ${props => getThemeFontHeight(props.theme, 'h1')};
  ${props => setMarging(props.theme, 'h1')} ${props => getColor(props.theme, 'h1')};
`;
export const H2 = styled.h2`
  font-size: ${props => getThemeFontSize(props.theme, 'h2')};
  line-height: ${props => getThemeFontHeight(props.theme, 'h2')};
  ${props => setMarging(props.theme, 'h2')} ${props => getColor(props.theme, 'h2')};
`;
export const H3 = styled.h3`
  font-size: ${props => getThemeFontSize(props.theme, 'h3')};
  line-height: ${props => getThemeFontHeight(props.theme, 'h3')};
  ${props => setMarging(props.theme, 'h3')} ${props => getColor(props.theme, 'h3')};
`;
export const H4 = styled.h4`
  font-size: ${props => getThemeFontSize(props.theme, 'h4')};
  line-height: ${props => getThemeFontHeight(props.theme, 'h4')};
  ${props => setMarging(props.theme, 'h4')} ${props => getColor(props.theme, 'h4')};
`;
export const H5 = styled.h5`
  font-size: ${props => getThemeFontSize(props.theme, 'h5')};
  line-height: ${props => getThemeFontHeight(props.theme, 'h5')};
  ${props => setMarging(props.theme, 'h5')} ${props => getColor(props.theme, 'h5')};
`;
export const H6 = styled.h6`
  font-size: ${props => getThemeFontSize(props.theme, 'h6')};
  line-height: ${props => getThemeFontHeight(props.theme, 'h6')};
  ${props => setMarging(props.theme, 'h6')} ${props => getColor(props.theme, 'h6')};
`;
