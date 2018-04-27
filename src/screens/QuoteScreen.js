import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  ImageBackground,
  LayoutAnimation,
  StatusBar
} from 'react-native'

import Quote from '../components/Quote'
import NextQuoteButton from '../components/NextQuoteButton';
import LinearGradient from 'react-native-linear-gradient';

const { quotes } = require('../../quotes.json')

const bgImage = require('../../assets/bg.png')

const tranquil = {
  duration: 500,
  create: {
    duration: 1000,
    delay: 300,
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  delete: {
    duration: 200,
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity,
  }
}

class QuoteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: Math.floor(Math.random() * (quotes.length)),
      // quoteIndex: 4,
    }
    this._incrementQuoteIndex = this._incrementQuoteIndex.bind(this)
  }

  _incrementQuoteIndex() {
    let newIndex;
     newIndex = Math.floor(Math.random() * (quotes.length));
    // newIndex = 3;
    while(newIndex == this.state.quoteIndex)
      newIndex = Math.floor(Math.random() * (quotes.length));
    this.setState({
      quoteIndex: newIndex
    })
  }
  componentWillUpdate() {
    // LayoutAnimation.configureNext(tranquil)
  }
  
  render() {
    var colorsArray = [];
    colorsArray.push("#FF6D8A");
    colorsArray.push("#FF7E47");
    colorsArray.push("#FFFF49");
    colorsArray.push("#ABF153");
    colorsArray.push("#5997FE");
    colorsArray.push("#27C6E4");
    
    colorsArray = colorsArray.sort(function() { return 0.5 - Math.random() });

    var locationsArray = [];
    locationsArray.push(0);
    locationsArray.push(0.2);
    locationsArray.push(0.5);
    locationsArray.push(0.6);
    locationsArray.push(0.8);
    locationsArray.push(0.9);
    
    locationsArray = locationsArray.sort(function() { return 0.5 - Math.random() });

    return (
      // <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <LinearGradient
      start={{x: Math.random(), y: Math.random()}} end={{x: Math.random(), y: Math.random()}}
      locations={locationsArray}
      colors={colorsArray}
      style={styles.backgroundContainer}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <View style={styles.container}>
          <Quote
              quoteText={quotes[this.state.quoteIndex].text}
              quoteSource={quotes[this.state.quoteIndex].source}
          />
          <NextQuoteButton onPress={this._incrementQuoteIndex} />
        </View>
      </LinearGradient>
      // </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffffff57"
  },
});

export default QuoteScreen;
