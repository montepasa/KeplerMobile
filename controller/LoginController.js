import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import GetUsers from '../repository/UserRepository';
export default class LoginController extends React.Component {
  state = {
    viewState = ''
  }

  componentDidMount() {
    var result = GetUsers();
    if (result.status == 200) {
      this.setState({ viewState = result.data });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginScreen viewState={this.state.viewState} />
      </View>
    );
  }
}