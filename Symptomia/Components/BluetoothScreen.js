import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native'



export default class BluetoothScreen extends Component {
  constructor (props) {
    super(props)
    this.manager = this.props.manager
  }

  render () {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{height: 10}} />
        <Button
          style={styles.button}
          onPress={() => this.props.onBackPress()}
          color="#FF6B6B"
          accessabilityLabel="Back"
          title="Back"
        />
        <View style={{height: 10}} />
        <Button
          style={styles.button}
          onPress={() => {}}
          color="#88d498"
          accessabilityLabel="Connect"
          title="Connect"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    fontSize: 15
  }
})
