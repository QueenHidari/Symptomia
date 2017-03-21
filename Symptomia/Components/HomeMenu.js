import React, { Component } from 'react'
import Calendar from 'react-native-calendar'
import {
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native'
import Moment from 'moment'
class HomeMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.container}>
          <Calendar
            customStyle={{day: {fontSize: 15, textAlign: 'center'}}}
            nextButtonText={'Next'}
            onDateSelect={(date) => {
              this.props.onDateSelect(date)
            }}
            date={this.props.date}
            prevButtonText={'Prev'}
            scrollEnabled
            showControls
            showEventIndicators
            titleFormat={'MMMM YYYY'}
            weekStart={0}
          />
        </View>
        <View style={{height: 2, width: 300, margin: 5, backgroundColor: '#404040'}} />
        <Button
          style={styles.button}
          onPress={() => this.props.onEventScreenPress()}
          color="#FF6B6B"
          accessabilityLabel="Events"
          title="Events"
        />
        <View style={{height: 5}} />
        <Button
          style={styles.button}
          onPress={() => this.props.onBluetoothScreenPress()}
          color="#FF6B6B"
          accessabilityLabel="Bluetooth"
          title="Bluetooth"
        />
        <Text style={styles.mainText}>{Moment(this.props.date).format('YYYY-MM-DD')}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginTop: 20
  },
  button: {
    width: 20
  },
  mainText: {
    fontSize: 13
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

export default HomeMenu
