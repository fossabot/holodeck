import React, { Component } from 'react';
import configureFonts from 'config/configureFonts';
import theme from '../../lib/themes/default-light';
import Holodeck from '../../lib/wrappers/Holodeck/index';

// configureFonts(theme);

export default class ThemeWrapper extends Component {
  render() {
    return (
      <Holodeck theme={theme}>;
        {this.props.children}
      </Holodeck>
    );
  }
}
