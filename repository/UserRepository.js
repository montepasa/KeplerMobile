
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
export default class User extends React.Component{
    constructor(props)
    {
        super(props);
    }
    static navigationOptions = {
        header: null,
      }

    static login = async (email, password) =>{ 
        return  new  Promise(resolve =>  {
            fetch('http://192.168.1.24:53434/api/Account/Login', 
            { 
              method: 'POST', 
              headers: 
              {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
              }, 
            
              body : JSON.stringify({
              email : email,
              password: password })
               
            }).catch(error => {
                switch (error.code) {
                    case 'auth/invalid-email':
                        alert('Invalid email address format.');
                        break;
                    case 'auth/user-not-found':
                    case 'auth/wrong-password':
                        alert('Invalid email address or password');
                        break;
                    default:
                        alert('Check your internet connection');
                }
                resolve(null);
            }).then(async (response) =>{
                if (response && response.status == 200) {
                    try{
                     await AsyncStorage.setItem("Login", "ibrahim"); 
                     resolve(response.json());
                }catch(error)
                {
                    console.log("**6***")
                    console.log(error);
                    resolve(null);
                }
                }
            });;
    });
    }
}


  