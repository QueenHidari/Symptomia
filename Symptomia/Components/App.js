import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  DrawerLayoutAndroid,
  StyleSheet,
  Navigator
} from 'react-native'
import EventScreen from './EventScreen'
import HomeMenu from './HomeMenu'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Moment from 'moment'
import uuidV4 from 'uuid'
import BluetoothScreen from './BluetoothScreen'
import { BleManager } from 'react-native-ble-plx'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: Moment().startOf('day'),
      events: [],
      navigator: null
    }
    this.manager = new BleManager()
  }

  info (message) {
    this.setState({info: message})
  }

  error (message) {
    this.setState({info: 'ERROR: ' + message})
  }

  updateValue (key, value) {
    this.setState({values: {...this.state.values, [key]: value}})
  }

  scanAndConnect () {
    this.manager.startDeviceScan(null, null, (error, device) => {
      this.info('Scanning...')
      console.log(device)

      if (error) {
        this.error(error.message)
        return
      }

      if (device.name === 'TI BLE Sensor Tag' || device.name === 'SensorTag') {
        this.info('Connecting to Arduino')
        this.manager.stopDeviceScan()
        device.connect()
          .then((device) => {
            this.info('Discovering services and characteristics')
            return device.discoverAllServicesAndCharacteristics()
          })
          .then((device) => {
            this.info('Setting notifications')
            return this.setupNotifications(device)
          })
          .then(() => {
            this.info('Listening...')
          }, (error) => {
            this.error(error.message)
          })
      }
    })
  }

  onDateSelect (date) {
    console.log('date set: ' + date)
    this.setState({date: date})
  }

  onAddEvent (symptom) {
    this.setState((prevState, props) => {
      return {
        events: [
          ...prevState.events,
          {
            id: uuidV4(),
            date: prevState.date,
            symptom: symptom
          }
        ]
      }
    })
  }

/*
  componentWillMount () {
    this.scanAndConnect()
  }
*/

  render () {
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
              if (route.index === 0) {
                return <HomeMenu
                  onDateSelect={(date) => this.onDateSelect(date)}
                  date={this.state.date}
                  events={this.state.events}
                  onEventScreenPress={() => {
                    navigator.push({index: 1})
                  }}
                  onBluetoothScreenPress={() => {
                    navigator.push({index: 2})
                  }}
                />
              } else if (route.index === 1) {
                return <EventScreen
                  events={this.state.events}
                  onBackPress={() => {
                    navigator.pop()
                  }}
                />
              } else if (route.index === 2) {
                return <BluetoothScreen
                  manager={this.props.manager}
                  onBackPress={() => {
                    navigator.pop()
                  }}
                />
              }
            }}
          />
        </DrawerLayoutAndroid>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#88d498"
            title="New Event"
            onPress={() => this.onAddEvent('syncope')}
            >
            <Icon name="create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navTitle: {
    height: 40,
    backgroundColor: '#282828'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  },
  navButtons: {
    flex: 1,
    height: 10
  }
})

export default App
