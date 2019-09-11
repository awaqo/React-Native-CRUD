import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LoginForm from './src/components/LoginForm';
import RegisterForm from './src/components/RegisterForm';

export default class App extends Component {
  render(){
    return(
      <RegisterForm />
    );
  }
}