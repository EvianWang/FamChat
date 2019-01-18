import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { inject } from 'mobx-react';
import color from '../../feature/color';
import MessageFormComponent from './MessageForm/messageFormComponent'
import Login from '../../component/loginComponent'
import { observer } from 'mobx-react/native';

@inject("store")
@observer
export default class ChatScene extends Component {
	constructor(props){
		super(props)
	}

	static navigationOptions = {
		title: 'Chat Room',
		headerTitleStyle: {
			color: '#616161',
		},
		headerStyle: {
			backgroundColor: color.dark,
		},
	}

	render(){
		const {store} = this.props
		return (
			<View style={{backgroundColor: color.primary , flex:1}}>
				<Text></Text>
				<MessageFormComponent {...this.props}/>
			</View>
		)
	}
}

