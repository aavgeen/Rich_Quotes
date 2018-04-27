import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
} from 'react-native'

import Navigator from './src/routes/routes';

export default class RichQuotes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
            <Navigator />
          )
  }
}


// AppRegistry.registerComponent('RichQuotes', () => RichQuotes);
