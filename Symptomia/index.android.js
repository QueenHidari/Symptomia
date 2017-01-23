
import React, { Component } from 'react';
import ReactNative, {Button, DrawerLayoutAndroid} from 'react-native';
import Calendar from 'react-native-calendar';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

function nothing() {
  return;
}


const moment = extendMoment(Moment);
const start = new Date(2016, 12, 10);
const end = Moment().add(1, 'days').startOf('day');
dateToday = Moment();
export default class Symptomia extends Component {
  state = {
    date: dateToday
  }
  onDateSelect = ({ date }) => this.setState({ ...this.state, date });
  render() {



    function onSwipePrev() {
      return;
    }
    function onSwipeNext() {
      return;
    }

    function onTouchNext() {
      return;
    }
    function onTouchPrev() {
      return;
    }
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#556270'}}>
        <View style={styles.navTitle}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'center', color: '#FF6B6B'}}>Symptomia</Text>
        </View>
        <View style={styles.navButtons}>
          <Button
            onPress={nothing()}
            color="#FF6B6B"
            accessabilityLabel="Calendar"
            title="Calendar"
          />
          <Button
            onPress={nothing()}
            color="#C44D58"
            accessabilityLabel="Settings"
            title="Settings"
          />
        </View>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerBackgroundColor="#272822"
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        >
          <View style={{flex: 1, alignItems: 'center'}}>
            <View style={styles.container}>
              <Calendar
                customStyle={{day: {fontSize: 15, textAlign: 'center'}}} // Customize any pre-defined styles 
                nextButtonText={'Next'}           // Text for next button. Default: 'Next' 
                onDateSelect={(date) => this.onDateSelect(date)} // Callback after date selection 
                onSwipeNext={this.onSwipeNext}    // Callback for forward swipe event 
                onSwipePrev={this.onSwipePrev}    // Callback for back swipe event 
                onTouchNext={this.onTouchNext}    // Callback for next touch event 
                onTouchPrev={this.onTouchPrev}    // Callback for prev touch event 
                prevButtonText={'Prev'}           // Text for previous button. Default: 'Prev' 
                scrollEnabled={true}              // False disables swiping. Default: False 
                selectedDate={this.state.date}       // Day to be selected 
                showControls={true}               // False hides prev/next buttons. Default: False 
                showEventIndicators={true}        // False hides event indicators. Default:False 
                startDate={Moment().startOf('month')}          // The first month that will display. Default: current month 
                titleFormat={'MMMM YYYY'}         // Format for displaying current month. Default: 'MMMM YYYY' 
                today={Moment()}              // Defaults to today 
                weekStart={1} // Day on which week starts 0 - Sunday, 1 - Monday, 2 - Tuesday, etc, Default: 1 
              />
            </View>
          </View>
      </DrawerLayoutAndroid>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
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
    flex: 1
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
  main: {
    paddingLeft: 3
  },



});

AppRegistry.registerComponent('Symptomia', () => Symptomia);
