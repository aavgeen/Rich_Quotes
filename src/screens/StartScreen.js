import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Platform
} from 'react-native'

const splashImage = require('../../assets/icon.png')

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this._onStartHandler = this._onStartHandler.bind(this)
  }
  _onStartHandler(){
    this.props.navigation.navigate('QuoteScreen');
  }
  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#3ddba4" barStyle="light-content" />
        <TouchableOpacity style={styles.button} onPress={this._onStartHandler}>
          <Image source={splashImage} style={styles.buttonImage} />
          <Text style={styles.splashText}>Rich Quotes</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3ddba4',
  },
  splashText: {
    fontSize: 40,
    marginTop: 20,
    color: '#01916f',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? "AppleSDGothicNeo-Regular" : "notoserif",
    fontWeight: "500"
  },
  button: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: '#3ddba4',
    width: undefined,
    height: undefined,
    paddingTop: 100
  },
  buttonImage: {
    width: 200,
    height: 200
  }
});

export default StartScreen;
