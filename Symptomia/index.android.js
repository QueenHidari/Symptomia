/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Drawer from 'react-native-drawer'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class symptomia extends Component {
  render() {
    return (
      <View style={styles.container}>
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

      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    backgroundColor: '#000000'
  },
  main: {
    paddingLeft: 3
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

AppRegistry.registerComponent('symptomia', () => symptomia);
