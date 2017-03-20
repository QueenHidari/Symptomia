import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native'
import { scanAndConnect } from 'react-native-ble-plx'
export default class BluetoothScreen extends Component {
  constructor (props) {
    super(props)
    this.manager = this.props.manager
  }
  render () {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
          <Button
            style={styles.button}
            onPress={() => this.props.onBackPress()}
            color="#FF6B6B"
            accessabilityLabel="Back"
            title="Back"
          />
          <View style={{width: 20}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 40
  }
})
