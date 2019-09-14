import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginForm from './src/components/LoginForm';
import RegisterForm from './src/components/RegisterForm';
import WelcomeScreen from './src/components/WelcomeScreen';

const AppNavigator = createStackNavigator({
  WelcomeScreen: { screen: WelcomeScreen, navigationOptions: { header: null } },
  LoginForm: { screen: LoginForm, navigationOptions: { header: null } },
  RegisterForm: { screen: RegisterForm, navigationOptions: { header: null } },
}, { initialRouteName: 'WelcomeScreen'} );

export default createAppContainer(AppNavigator);