import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { inject } from 'mobx-react';
import color from '../../feature/color';

export default class MomentScreen extends Component {
	constructor(props){
		super(props)
	}

	static navigationOptions = {
		title: 'Moment',
		headerTitleStyle: {
			color: '#616161',
		},
		headerStyle: {
			backgroundColor: color.dark,
		},
	}

	render(){
		return (
			<View style={{backgroundColor: color.primary , flex:1}}>
				<Text>I am MomentScreen!</Text>
			</View>
		)
	}
}