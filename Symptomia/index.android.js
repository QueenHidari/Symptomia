
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './Components/App'
import BLEManager from 'react-native-ble-plx'

export default class SycopeCounterProject extends Component {
  constructor () {
    super()
    this.manager = new BLEManager()
  }
  render () {
    return (
      <App
        manager={this.manager}
      />
    )
  }
}

AppRegistry.registerComponent('SyncopeCounterProject', () => SycopeCounterProject)
