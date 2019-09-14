import React, { Component } from 'react';
import {
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    StatusBar
} from 'react-native';

import { Button } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';

class WelcomeScreen extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar hidden/>
                <Text style={styles.textHeader}>Selamat Datang</Text>
                <Button block success style={styles.buttonStyle}
                    onPress={() => this.props.navigation.navigate('LoginForm')}>
                    <Text style={styles.buttonText}>Login</Text>
                </Button>
                <Button block success style={styles.buttonStyle}
                    onPress={() => this.props.navigation.navigate('RegisterForm')}>
                    <Text style={styles.buttonText}>Register</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2da9e3'
    },
    textHeader: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        marginTop: 150,
        marginBottom: 100
    },
    buttonStyle: {
        paddingTop: 6,
        marginBottom: 20,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 6
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 15
    }
});

export default WelcomeScreen;