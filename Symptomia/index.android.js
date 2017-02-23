
import React, { Component } from 'react'
import Calendar from 'react-native-calendar'
import {
  Button,
  DrawerLayoutAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator
} from 'react-native'
import Moment from 'moment'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createStore } from 'redux'
import syncopeCounter from './reducers/index'
import {
  setScreen,
  enableButton,
  disableButton,
  setDate,
  addEvent
} from './actions/index'

var dateToday = Moment().toDate()

let store = createStore(syncopeCounter)

var navigationView = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#556270'}}>
        <View style={styles.navTitle}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'center', color: '#FF6B6B'}}>Syncope Event Counter</Text>
        </View>
        <View style={styles.navButtons}>
          <Button
            onPress={() => {}}
            color="#FF6B6B"
            accessabilityLabel="Calendar"
            title="Calendar"
          />
          <Button
            onPress={() => {}}
            color="#C44D58"
            accessabilityLabel="Settings"
            title="Settings"
          />
        </View>
      </View>
    )
}


export default class SycopeCounterProject extends Component {
  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#f3f3f3', flexGrow: 1}}>
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerBackgroundColor="#272822"
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={navigationView}
          >
          <Navigator
            initialRoute={{ index: 0 }}
            renderScene={(route, navigator) => {
              return <Screen
                onEventScreenPress={
                  navigator.push({
                    index: 1
                  })
                }

                onBackButton={() => {
                    if (route.index > 0) {
                      navigator.pop()
                    }
                  }
                }


              />
            }}
          />
        </DrawerLayoutAndroid>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor="#88d498"
            title="New Event"
            onPress={() => { store.dispatch(addEvent(store.getState().date, 'syncope')) }}
            >
            <Icon name="create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    )
  }
}

class Screen extends Component {
  render () {
    var homeMenu = (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.container}>
          <Calendar
            customStyle={{day: {fontSize: 15, textAlign: 'center'}}}
            nextButtonText={'Next'}
            onDateSelect={(date) => onDateSelect(date)}
            prevButtonText={'Prev'}
            scrollEnabled={true}
            selectedDate={dateToday}
            showControls={true}
            showEventIndicators={true}
            startDate={Moment().startOf('month')}
            titleFormat={'MMMM YYYY'}
            today={Moment()}
            weekStart={0}
          />
        </View>
        <Button
          style={styles.button}
          onPress={this.props.onEventScreenPress}
          color="#FF6B6B"
          accessabilityLabel="Events"
          title="Events"
        />
        <Text style={styles.mainText}>{String(store.getState().date)}</Text>
      </View>
    )
    var renderEvents = () => {
      return (
        store.getState().events.map((event) => {
          return (
            <View style={styles.event}>
              <Text>Event</Text>
              <Text>Symptom: {event.symptom}</Text>
              <Text>date: {event.date}</Text>
            </View>
          )
        })
      )
    }
    var eventScreen = (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Button
          style={styles.button}
          onPress={this.props.onBackPress}
          color="#FF6B6B"
          accessabilityLabel="Back"
          title="Back"
        />
        <View style={styles.eventList}>
          <ScrollView>
            {renderEvents}
          </ScrollView>
        </View>
      </View>
    )

    var screen = () => {
      if (this.props.index === 0) {
        return homeMenu
      } else if (this.props.index === 1) {
        return eventScreen
      } else {
        return homeMenu
      }
    }
    var onDateSelect = (date) => { store.dispatch(setDate(date)) }
    return (
      screen()
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 20
  },
  returnButton: {
    width: 20,
    marginTop: 10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  },
  container: {
    height: 400,
    width: 320,
    marginTop: 20
  },
  date: {
    marginTop: 50
  },
  focused: {
    color: 'blue'
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
  mainText: {
    color: '#111111',
    margin: 10,
    fontSize: 15
  },
  main: {
    paddingLeft: 3
  }
})

AppRegistry.registerComponent('SyncopeCounterProject', () => SycopeCounterProject)
