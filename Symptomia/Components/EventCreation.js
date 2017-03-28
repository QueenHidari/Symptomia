import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView
} from 'react-native'
import Moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialIcons'

class EventCreation extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Button
            style={styles.button}
            onPress={() => this.props.onBackPress()}
            color="#FF6B6B"
            accessabilityLabel="Back"
            title="Back"
          />
          <View style={{width: 20}} />
          <Button
            style={styles.button}
            onPress={() => this.props.onCreatePress()}
            color="#FF6B6B"
            accessabilityLabel="Create"
            title="Create"
          />
        </View>
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
