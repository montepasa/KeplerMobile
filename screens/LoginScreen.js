

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
import { w, h, totalSize } from '../components/Dimensions';
import InputField from "../components/InputField";
import User from '../repository/UserRepository';
const mottoLogo = require('../assets/images/motto.png');
const email = require('../assets/images/email.png');
const password = require('../assets/images/password.png');



export default class LoginScreen extends React.Component {
  state = { name: '', email: '', password: '', errorMessage: null }
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  }
   login = async (email, password)=>{
    console.log("**15**");
    var item = User.login(email, password).then((response) => {
      console.log("response'u yazdırıyoruz", response.email);
      console.log("**16**");
    });
    console.log("item then");
  }
  componentDidMount(){
    console.log("**10**");
  }
  componentDidUpdate(){
    console.log("**11**");
  }
  
  render() {
    return (
      <ImageBackground source={require('../assets/images/people.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <Image style={styles.icon} resizeMode="contain" source={mottoLogo} />
          <InputField
            placeholder="Email"
            keyboardType="email-address"
            returnKeyType={ "next" }
            style={styles.email}
            error={this.state.isEmailCorrect}
            focus={this.changeInputFocus}
            ref={ref => this.email = ref}
            icon={email}
          />
          <InputField
            placeholder="Password"
            returnKeyType={ "next" }
            secureTextEntry={true}
            blurOnSubmit={true}
            error={this.state.isPasswordCorrect}
            ref={ref => this.password = ref}
            focus={this.changeInputFocus}
            icon={password}
          />
          <TouchableHighlight  underlayColor="#48bbec" activeOpacity={0.6} style={styles.button} onPress={() => this.login(this.email.getInputValue(), this.password.getInputValue())}>
            <Text style={styles.buttonText}>
              Login
        </Text>
          </TouchableHighlight>

          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.touchable} activeOpacity={0.6}>
              <Text style={styles.createAccount}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} activeOpacity={0.6}>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  icon: {
    width: w(40),
    height: h(15),
    marginTop: h(1),
    marginBottom: h(1),
  },
  textContainer: {
    width: w(100),
    flexDirection: 'row',
    marginTop: h(5),
  },
  email: {
    marginBottom: h(5),
  },
  touchable: {
    flex: 1,
  },
  createAccount: {
    color: '#ffffffEE',
    textAlign: 'center',
    fontSize: totalSize(2),
    fontWeight: '600',
  },
  forgotPassword: {
    color: '#ffffffEE',
    textAlign: 'center',
    fontSize: totalSize(2),
    fontWeight: '600',
  },
  button: {
    height: h(6),
    backgroundColor: '#48bbec',
    marginTop: 15,
    paddingVertical: w(3),
    marginLeft: w(3),
    justifyContent: 'center',
    width: '80%',

  },
  buttonText: {
    fontSize: totalSize(2),
    color: '#FFF',
    fontWeight: '600',
    alignSelf: 'center'
  }
});