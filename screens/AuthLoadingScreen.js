import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    AsyncStorage
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
var userToken = null;

export default class AuthLoadingScreen extends React.Component {

    constructor(props) {
        super(props);
        this._bootstrapAsync();
        //this._bootstrapAsync();
    }

    static navigationOptions = {
        header: null,
    };

    _bootstrapAsync = async () => {
        console.log("**3***", )
        userToken = await AsyncStorage.getItem('Login');
        //console.log("userrtoken", userToken);
        console.log("**3***", userToken);
        this.props.navigation.navigate( userToken == null ? 'Login' : 'Dashboard');

    };
    render() {
        return (
            //Buraya güzel bir loading ekranı koyabilirsin
            <View></View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
});