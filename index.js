import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import RichQuotes from './index';

export default class Rich_Quotes extends Component {
  render() {
    return(
            <RichQuotes />
          )
  }
}


AppRegistry.registerComponent('Rich_Quotes', () => Rich_Quotes);
