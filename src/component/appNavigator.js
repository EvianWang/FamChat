import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screen/loginScreen';
import MainScreen from  '../screen/mainScreen';
import AuthLoadingScreen from '../screen/authLoadingScreen';

const Login = {
	screen: LoginScreen,
	navigationOptions:{
		header: null
	}
}

const mainScreen = {
	screen: MainScreen,
	navigationOptions:{
		header: null
	}
}

const authLoadingScreen = {
	screen: AuthLoadingScreen,
	navigationOptions:{
		header: null
	}
}
const RouteConfig = {
	initialRoute: 'Auth'
}

const rootNavigator = createStackNavigator ({
	Login: Login,
	Main: mainScreen,
	Auth: authLoadingScreen,
},RouteConfig)

const AppNavigator = createAppContainer(rootNavigator);

export default AppNavigator;