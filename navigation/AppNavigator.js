import React from 'react';
import { createSwitchNavigator, createStackNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
const LoginStack = createStackNavigator({ Login: LoginScreen });
export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading: AuthLoadingScreen,
  Main: MainTabNavigator,
  Login : LoginStack,
  Dashboard: DashboardScreen,
},
{
  initialRouteName: 'AuthLoading',
}
);