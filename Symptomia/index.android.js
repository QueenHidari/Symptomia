
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './Components/App'

export default class SycopeCounterProject extends Component {
  render () {
    return (
      <App
        manager={this.manager}
      />
    )
  }
}

AppRegistry.registerComponent('SyncopeCounterProject', () => SycopeCounterProject)
