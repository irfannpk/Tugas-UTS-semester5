import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ContactScreen from './ContactScreen';
import HomeScreen from './HomeScreen';
import BookScreen from './BookScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Contact: ContactScreen,
    Book: BookScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);