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
    var renderEvents = (events) => {
      return (
        this.props.events.map((event) => {
          return (
            <View>
              <View style={styles.event}>
                <View style={styles.eventElement}>
                  <Icon name="favorite" style={{fontSize: 20, margin: 5, marginLeft: 10, color: '#FF6B6B'}} />
                  <Text style={styles.eventText}>Symptom:</Text>
                  <Text style={styles.eventText}>{event.symptom}</Text>
                </View>
                <View style={styles.eventElement}>
                  <Icon name="date-range" style={{fontSize: 20, margin: 5, marginLeft: 10, color: '#FF6B6B'}} />
                  <Text style={styles.eventText}>Date: </Text>
                  <Text style={styles.eventText}>{Moment(event.date).format('YYYY-MM-DD')}</Text>
                </View>
              </View>
              <View style={{height: 5}} />
            </View>
          )
        })
      )
    }
    return (
      <View style={{flex: 1}}>
        <View style={{height: 5}} />
        <Button
          style={styles.button}
          onPress={this.props.onBackPress}
          color="#FF6B6B"
          accessabilityLabel="Back"
          title="Back"
        />
        <View style={{height: 5}} />
        <ScrollView style={{width: 300, height: 300}}>
          <View style={{alignItems: 'center', flex: 1}}>
            {renderEvents(this.props.events)}
          </View>
        </ScrollView>
        <View style={{height: 5}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 13
  },
  button: {
    width: 40,
    fontSize: 15
  },
  event: {
    borderRadius: 5,
    width: 300,
    height: 80,
    backgroundColor: '#282828'
  },
  eventElement: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row'
  },
  eventText: {
    fontSize: 13,
    color: '#FF6B6B'
  }
})

export default EventScreen
