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
let userToken = true;

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
        //const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'Login' : 'Login');
    };i
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