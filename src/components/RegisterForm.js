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
    Text,
    Label
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
                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputStyle}>Username</Text>
                        </Label>
                        <Input style={styles.inputStyle}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputStyle}>Email</Text>
                        </Label>
                        <Input style={styles.inputStyle}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputStyle}>Password</Text>
                        </Label>
                        <Input style={styles.inputStyle} secureTextEntry={true}/>
                    </Item>
                </Form>
                <Button block info style={styles.footerBottomStyle}>
                    <Text>Register</Text>
                </Button>
                <View style={styles.footerSignUpStyle}> 
                    <Text style={styles.signUpStyle}>
                        Already have an account? 
                        <Text onPress={() => this.props.navigation.navigate('LoginForm')} style={{color: '#2da9e3', fontSize: 12}}>
                            Sign in here
                        </Text>
                    </Text>
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
        color: '#ffffff',
        marginBottom: 6,
        fontSize: 14
    },
    footerBottomStyle: {
        marginTop: 50,
        paddingTop: 10,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 6
    },
    footerSignUpStyle: {
        marginTop: 25,
        alignItems: 'center',
    },
    signUpStyle: {
        color: '#ffffff',
        fontSize: 12
    }
});

export default RegisterForm;