/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 62620c4... Updated and added drawer
import Drawer from 'react-native-drawer'
>>>>>>> parent of 62620c4... Updated and added drawer
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Symptomia extends Component {
  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
<<<<<<< HEAD
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
=======
=======
>>>>>>> parent of 62620c4... Updated and added drawer
        <Drawer
            type="overlay"
            content={
              <View style={styles.main}></View>
            }
            tapToClose={true}
            openDrawerOffset={0.2}
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            tweenHandler={(ratio) => ({
              main: { opacity:(2-ratio)/2 }
            })}
          >
        </Drawer>

<<<<<<< HEAD
>>>>>>> parent of 62620c4... Updated and added drawer
=======
>>>>>>> parent of 62620c4... Updated and added drawer
      </View>
    );
  }
}

const styles = StyleSheet.create({
<<<<<<< HEAD
<<<<<<< HEAD
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
=======
=======
>>>>>>> parent of 62620c4... Updated and added drawer
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    backgroundColor: '#000000'
  },
  main: {
    paddingLeft: 3
>>>>>>> parent of 62620c4... Updated and added drawer
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F2F2F',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F2F2F',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Symptomia', () => Symptomia);
