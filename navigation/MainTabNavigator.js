import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';

const DashboardStack = createStackNavigator({
  Dashboard: DashboardScreen,
});

DashboardStack.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile : ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon : ({focused}) =>(
    <TabBarIcon focused = {focused}
    name={
      Platform.OS ==='ios'? `ios-information-circle${focused ? '' : '-outline'}`: 'md-information-circle'
    }
    />
  ), 
};

export default createBottomTabNavigator({
  DashboardStack,
  ProfileStack,
});
