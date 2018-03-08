import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal, ThemeProvider } from 'styled-components';

export default class Holodeck extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.theme.themeName !== nextProps.theme.themeName;
  }

  render() {
    const { theme } = this.props;
    injectGlobal`
      body {
        background-color: ${theme.globals.bgColor};
        font-family: ${theme.globals.primaryFont};
        color: ${theme.globals.primaryTextColor};
        font-display: swap;
      }
      
      em {
        font-style: ${theme.globals.emStyle};
      }
      
      strong {
        font-weight: ${theme.globals.strongWeight};
      }
      
      small {
        font-size: ${theme.globals.smallSize};
      }
      
      .hoverable {
        transition: box-shadow .25s;
      
        &:hover {
          box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
      }
      
      .flow {
        font-size: 1.2rem;
      }
    `;

    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}

Holodeck.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  theme: PropTypes.object
};
