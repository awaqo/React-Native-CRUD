import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    Item,
    Input,
    Form,
    Button,
    Thumbnail,
    Text
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import BgImage from '../images/background.jpg';
import Logo from '../images/logo.png';

class RegisterForm extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Image style={styles.bgImageStyle} source={BgImage} />
                <View style={styles.logoStyle}>
                    <Thumbnail square large source={Logo}/>
                    <Text style={styles.textLogoStyle}>React Native</Text>
                </View>
                <Form style={styles.formRegisterStyle}>
                    <Item style={styles.itemStyle}>
                        <Icon name={Platform.OS === "android" ? "android-person" : "md-person"} size={26} color={'white'} />
                        <Input style={styles.inputStyle}/>
                    </Item>
                    <Item style={styles.itemStyle}>
                        <Icon name={Platform.OS === "android" ? "android-lock" : "md-lock"} size={26} color={'white'} />
                        <Input style={styles.inputStyle} secureTextEntry={true}/>
                    </Item>
                    <Item style={styles.itemStyle}>
                        <Icon name={Platform.OS === "android" ? "android-mail" : "md-mail"} size={26} color={'white'} />
                        <Input style={styles.inputStyle}/>
                    </Item>
                </Form>
                <Button block info style={styles.footerBottomStyle}>
                    <Text>Register</Text>
                </Button>
                <View style={styles.footerSignUpStyle}>
                    <TouchableOpacity>
                        <Text style={styles.signUpStyle}>
                            Already have an account? Sign in here
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    bgImageStyle: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    logoStyle: {
        marginTop: 70,
        marginBottom: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogoStyle: {
        fontSize: 15,
        color: 'white'
    },
    formRegisterStyle: {
        marginTop: -30,
        paddingLeft: 10,
        paddingRight: 30
    },
    itemStyle: {
        marginTop: 5,
    },
    inputStyle: {
        color: 'white',
        marginBottom: 1,
        marginLeft: 5,
        fontSize: 14
    },
    footerBottomStyle: {
        marginTop: 70,
        paddingTop: 10,
        marginLeft: 16,
        marginRight: 16
    },
    footerSignUpStyle: {
        marginTop: 25,
        alignItems: 'center'
    },
    signUpStyle: {
        color: '#ffffff',
        fontSize: 12
    }
});

export default RegisterForm;