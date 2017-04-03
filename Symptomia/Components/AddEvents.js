import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native'
import Moment from 'moment'
import {DatePicker, Input} from 'react-native-ui-xg'

class AddEvents extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 5}} />
        <View style={styles.container}>
          <DatePicker
            style={{width: 350}}
            date={this.props.dateTimeSelected}
            mode="datetime"
            placeholder="select date"
            format="YYYY-MM-DD HH:mm"
            maxDate={Moment().format('YYYY-MM-DD HH:mm')}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => { this.props.onDateTimeSelect(date) }}
          />
        </View>
        <View style={styles.container}>
          <Input
            label="Symptom"
            value={this.props.symptom}
            placeholder="symptom"
            onChangeText={(text) => {
              console.log('Changed text to: ' + text)
              this.props.onChangeText(text)
            }}
          />
        </View>
        <View style={{height: 2, width: 350, margin: 5, backgroundColor: '#404040'}} />
        <View style={{height: 5}} />
        <Button
          style={styles.button}
          onPress={() => this.props.onAddEvent()}
          color="#88d498"
          accessabilityLabel="Log Event"
          title="Log Event"
        />
        <View style={{height: 5}} />
        <Button
          style={styles.button}
          onPress={() => this.props.onConnectPress()}
          color="#88d498"
          accessabilityLabel="Connect"
          title="Connect"
        />
        <Text style={styles.mainText}>{Moment(this.props.dateTimeSelected).format('YYYY-MM-DD HH:mm')}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  button: {
  },
  mainText: {
    fontSize: 13
  }
})

export default AddEvents
