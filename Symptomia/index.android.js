
import React, { Component } from 'react'
import Calendar from 'react-native-calendar'
import {
  Button,
  DrawerLayoutAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View
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

var dateToday = Moment()

var onDateSelect = (date) => { store.dispatch(setDate(date)) }

class homeMenu extends Component {
  render () {
    return (
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
          onPress={() => { store.dispatch(setScreen(eventScreen)) }}
          color="#FF6B6B"
          accessabilityLabel="Events"
          title="Events"
        />
        <Text style={styles.mainText}>{String(store.getState().events)}</Text>
        <Text style={styles.mainText}>{String(store.getState().date)}</Text>
      </View>
    )
  }
}

class navigationView extends Component {
  render () {
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
}

class eventScreen extends Component {
  render () {
    return(
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{height: 20}} />
        <Button
          style={styles.returnButton}
          onPress={() => { store.dispatch(setScreen(homeMenu)) }}
          color="#FF6B6B"
          accessabilityLabel="Return"
          title="Return"
        />
      </View>
    )
  }
}
export default class SycopeCounterProject extends Component {
  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#f3f3f3', flexGrow: 1}}>
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerBackgroundColor="#272822"
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}
          >
            {store.getState().menu}
        </DrawerLayoutAndroid>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor="#88d498"
            title="New Event"
            onPress={() => store.dispath(addEvent(store.getState().date, 'syncope'))}
            >
            <Icon name="create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    )
  }
}




//function combine() {
//  var rv = {};
//  for (i = 0; i < arguments.length; i++) {
//    for (thing in arguments[i]) {
//        rv[thing]=arguments[i][thing];
//    }
//  }
//  return rv;
//}

// const store = createStore(syncopeCounter);

/* store.subscribe(throttle(() => {
  saveState({
    events: store.getState().events
  })
}, 1000)) */
let store = createStore(syncopeCounter)



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
  navTitle: {
    backgroundColor: '#272822'
  },
  navButtons: {
    flex: 1,
    flexGrow: 1
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
AppRegistry.registerComponent('SyncopeCounterProject', () => this.SyncopeCounterProject)
