import React, { Component } from 'react';
import { View, Text } from "react-native";
//import { inject } from 'mobx-react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ChatScene from "../scenes/Chat/chatScene";
import MomentScene from "../scenes/Moment/momentScene";
import MeScene from "../scenes/Me/meScene";
import color from "../feature/color";

const ChatStack = createStackNavigator({
	Chat: ChatScene,
});

ChatStack.navigationOptions={
	tabBarLabel: 'Chat',
};

const MomentStack = createStackNavigator({
	Moment: MomentScene,
});

MomentStack.navigationOptions = {
	tabBarLabel: 'Moment',
};

const MeStack = createStackNavigator({
	Me: MeScene,
});

MeStack.navigationOptions = {
	tabBarLabel: 'Me',
};

export default createBottomTabNavigator({
	ChatStack,
	MomentStack,
	MeStack,
});
