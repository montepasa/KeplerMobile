import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  TextInput,
  Button,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import { userLogin } from '../service/Firebase';
import PropTypes from 'prop-types';
import { WebBrowser } from 'expo';
import { w, h, totalSize } from '../components/Dimensions';
import InputField from "../components/InputField";
import { MonoText } from '../components/StyledText';
const mottoLogo = require('../assets/images/motto.png');
const email = require('../assets/images/email.png');
const password = require('../assets/images/password.png');
const person = require('../assets/images/person.png');
const repeat = require('../assets/images/repeat.png');



export default class DashboardScreen extends React.Component {
  state = { name: '', email: '', password: '', errorMessage: null }
  constructor(props) {
    super(props);
    console.log("**4***");
    AsyncStorage.removeItem("Login");
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
        <View style={styles.container}>
         <Text>dashboard</Text>
        </View>
    )

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: w(50),
    alignItems: 'center',
    backgroundColor: 'rgba(143, 39, 190, 0.4)'
  },
});