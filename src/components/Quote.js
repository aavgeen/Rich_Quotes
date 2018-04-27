import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native'

class Quote extends Component {
  render() {
    return (
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>"{this.props.quoteText}"</Text>
        <Text style={styles.sourceText}>- {this.props.quoteSource}</Text>
      </View>
    )
  }
}

Quote.propTypes = {
  quoteText: PropTypes.string.isRequired,
  quoteSource: PropTypes.string,
}

const styles = StyleSheet.create({
  quoteContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  quoteText: {
    fontFamily: (Platform.OS === 'ios') ?
        'AvenirNext-Bold' :
        'Roboto',
    fontSize: 28,
    fontWeight: "500",
    color: '#000000',
    marginVertical: 30,
    marginHorizontal: 20
  },
  sourceText: {
    fontFamily: (Platform.OS === 'ios') ?
        'AvenirNext-Italic' :
        'Roboto',
    fontSize: 19,
    color: '#020202',
    textAlign: 'right',
    fontStyle: 'italic',
    marginHorizontal: 10
  }
})

export default Quote
