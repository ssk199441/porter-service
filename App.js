import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Map from './screens/Map';
//import HomeScreen from './screens/HomeScreen';
//import AboutScreen from './screens/AboutScreen';

//import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <Map />;
  }
}

/*const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
