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

class EventScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {


    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{height: 5}} />
        <Button
          style={styles.button}
          onPress={this.props.onBackPress}
          color="#FF6B6B"
          accessabilityLabel="Back"
          title="Back"
        />
        <View style={{height: 5}} />
        <ScrollView style={{flex: 1}}>
          {renderEvents(this.props.events)}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 20
  },
  event: {
    borderRadius: 5,
    width: 300,
    height: 80,
    backgroundColor: '#282828'
  },
  eventElement: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  eventText: {
    fontSize: 15,
    color: '#FF6B6B'
  }
})

export default EventScreen
