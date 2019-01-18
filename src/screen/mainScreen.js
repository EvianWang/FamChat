import React, { Component } from 'react';
import { View, Text } from "react-native";
//import { inject } from 'mobx-react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ChatScene from "../scenes/Chat/chatScene";
import MomentScene from "../scenes/Moment/momentScene";
import MeScene from "../scenes/Me/meScene";
import color from "../feature/color";
import { Icon } from 'react-native-elements';

const ChatStack = createStackNavigator({
	Chat: ChatScene,
});

ChatStack.navigationOptions={
	tabBarLabel: 'Chat',
	tabBarIcon:({ focused }) => (
		focused ? <Icon name='chat'
						color={color.dark}
		/> : <Icon name='chat'
					color={color.grey}/>
		),
};

const MomentStack = createStackNavigator({
	Moment: MomentScene,
});

MomentStack.navigationOptions = {
	tabBarLabel: 'Moment',
	tabBarIcon:({ focused }) => (
		focused ? <Icon name='chat'
						color={color.dark}
		/> : <Icon name='chat'
					color={color.grey}/>
		),
};

const MeStack = createStackNavigator({
	Me: MeScene,
});

MeStack.navigationOptions = {
	tabBarLabel: 'Me',
	tabBarIcon:({ focused }) => (
		focused ? <Icon name='person'
						color={color.dark}
		/> : <Icon name='person'
					color={color.grey}/>
		),
};

export default createBottomTabNavigator({
	ChatStack,
	//MomentStack,
	MeStack,
});
