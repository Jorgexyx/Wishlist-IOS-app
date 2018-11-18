import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './pages/Home.js';

export default class App extends React.Component {
  render() {
    return (
			< AppContainer />
    );
  }
}

const StackNav = createStackNavigator ({
	Home: { screen: HomeScreen },
});

const AppContainer = createAppContainer(StackNav);
