/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import ReactNative, {Button, DrawerLayoutAndroid} from 'react-native'
import Drawer from 'react-native-drawer'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class symptomia extends Component {
  render() {

    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#556270'}}>
        <View style={styles.navTitle}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'center', color: '#FF6B6B'}}>Symptomia</Text>
        </View>
        <View style={styles.navButtons}>
          <Button
            onPress={null}
            color="#FF6B6B"
            accessabilityLabel="Calendar"
            title="Calendar"
          />
          <Button
            onPress={null}
            color="#C44D58"
            accessabilityLabel="Settings"
            title="Settings"
          />
        </View>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerBackgroundColor="#272822"
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        >
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello world!</Text>
          </View>
      </DrawerLayoutAndroid>

    );
  }
}

const styles = StyleSheet.create({
  navTitle: {
    backgroundColor: '#272822'
  },
  navButtons: {
    flex: 1
  },
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    backgroundColor: '#000000'
  },
  text: {
    color: '#FFFFFF',
    margin: 10,
    fontSize: 15
  },
  main: {
    paddingLeft: 3
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
